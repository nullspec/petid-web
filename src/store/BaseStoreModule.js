import Vue from 'vue';
import * as types from '@/store/mutation-types';
import Sort from '@/utils/Sort';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] }]
*/

/* State is a function so it can be reusable */
class BaseStoreModule {
  constructor({ component, sort }) {
    this.namespaced = true;
    this.component = component;
    this.sort = sort;

    this.state = {
      key: null,
      all: [],
      current: {},
      loaded: false,
      component: this.component,
      sort: this.sort,
    };

    this.getters = {
      getAll: state => state.all,
      getFirst: state => state.all[0],
      getByKey: state => value => (
        state.all.find(item => item[state.key] === value)
      ),
      getIndexByKey: state => value => (
        state.all.findIndex(item => item[state.key] === value)
      ),
      loaded: state => state.loaded,
      getComponent: state => state.component,
      getCurrent: state => state.current,
    };

    this.actions = {
      async fetchAll({ dispatch }, { service, key, Transform }) {
        dispatch('setStoreKey', key);
        const resp = await service.fetchAll();
        if (resp && resp.status === 200) {
          let results = resp.data;

          /* Possibly tranform each row */
          if (Transform) {
            results = results.map(res => new Transform(res));
          }
          dispatch('setAll', { results });
        }
      },
      async fetchAllBy({ dispatch }, {
        service,
        key,
        fetchBy,
        Transform,
      }) {
        dispatch('setStoreKey', key);
        const resp = await service.fetchAll(fetchBy);
        if (resp.status === 200) {
          let results = resp.data;

          /* Possibly tranform each row */
          if (Transform) {
            results = results.map(res => new Transform(res));
          }
          dispatch('setAll', { results });
        }
      },
      async save({ dispatch, getters }, { service, item }) {
        const resp = await service.save(item);
        const { status, data } = resp;
        dispatch('setSaveResponse', { status, data });
        dispatch('alertMessage/setApiResponse', {
          resp,
          component: getters.getComponent,
        }, { root: true });
        return resp;
      },
      async delete(
        {
          commit,
          dispatch,
          state,
          getters,
        },
        { service, item },
      ) {
        const resp = await service.delete(item);
        if (resp.status === 204) {
          const index = getters.getIndexByKey(item[state.key]);
          commit(types.DELETE, index);
        }
        dispatch('alertMessage/setApiResponse', {
          resp,
          component: getters.getComponent,
        }, { root: true });
        return resp;
      },
      setSaveResponse({ dispatch }, { status, data }) {
        const saveTypes = {
          200: () => dispatch('update', data),
          201: () => dispatch('add', data),
          409: () => dispatch('add', data),
        };
        (saveTypes[status])();
      },
      setAll({ commit, dispatch, state }, { results }) {
        let sorted = Object.assign([], results);
        if (state.sort) {
          sorted = Sort.sortArrayObject(results, state.sort.key, state.sort.descending);
        }

        commit(types.SET_ALL, sorted);

        if (sorted.length) {
          dispatch('update', sorted[0]);
        }
        dispatch('setLoaded');
      },
      clearAll({ commit, dispatch }) {
        commit(types.SET_ALL, []);
        commit(types.SET_LOADED, false);
        dispatch('setCurrent');
      },
      setLoaded({ commit }) {
        commit(types.SET_LOADED, true);
      },
      setStoreKey({ commit }, key) {
        commit(types.SET_KEY, key);
      },
      add({ commit }, item) {
        commit(types.ADD, item);
      },
      update({ dispatch }, item) {
        dispatch('updateItems', item);
      },
      updateItems({ commit, getters, state }, item) {
        const index = getters.getIndexByKey(item[state.key]);
        commit(types.UPDATE_BY_INDEX, { item, index });
      },
      setCurrent({ commit }, item) {
        commit(types.SET, item);
      },
      clearStore({ commit, dispatch }) {
        commit(types.SET_LOADED, false);
        this.state.component = null;
        dispatch('setStoreKey', null);
        dispatch('setAll', { results: [], sort: null });
        dispatch('setCurrent', {});
      },
    };

    this.mutations = {
      [types.SET_KEY](state, key) {
        state.key = key;
      },
      [types.SET_ALL](state, items) {
        state.all = items;
      },
      [types.SET_LOADED](state, bool) {
        state.loaded = bool;
      },
      [types.SET](state, item) {
        state.current = item;
      },
      [types.ADD](state, item) {
        state.all.push(item);
      },
      [types.DELETE](state, index) {
        state.all.splice(index, 1);
      },
      [types.UPDATE_BY_INDEX](state, { item, index }) {
        Vue.set(state.all, index, item);
      },
    };
  }
}

export default BaseStoreModule;
