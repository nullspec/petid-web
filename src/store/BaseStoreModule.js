import * as types from '@/store/mutation-types';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] }]
*/

/* State is a function so it can be reusable */
class BaseStoreModule {
  constructor() {
    this.namespaced = true;

    this.state = {
      all: [],
    };

    this.getters = {
      getAll: state => state.all,
    };

    this.actions = {
      async fetchAll({ dispatch }, { service, Transform }) {
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
      setAll({ commit }, { results }) {
        commit(types.SET_ALL, results);
      },
      clearAll({ commit }) {
        commit(types.SET_ALL, []);
      },
      clearStore({ dispatch }) {
        dispatch('setAll', { results: [] });
      },
    };

    this.mutations = {
      [types.SET_ALL](state, items) {
        state.all = items;
      },
    };
  }
}

export default BaseStoreModule;
