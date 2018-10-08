import * as types from '@/store/mutation-types';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] }]
*/

class TimeoutStore {
  constructor() {
    this.namespaced = true;

    this.state = {
      authTimeout: null,
      authTimeoutWarning: null,
      authInterval: null,
    };

    this.getters = {
      getAuthTimeout: state => state.authTimeout,
      getAuthTimeoutWarning: state => state.authTimeoutWarning,
      getAuthInterval: state => state.authInterval,
    };

    this.actions = {
      /* Timers */
      startLogoutTimer({ commit, dispatch }) {
        /* Clear timeouts */
        dispatch('clearAllTimeouts');

        /* Set new timeout */
        commit(types.SET_AUTH_TIMEOUT, Date.now());

        /* Set new interaval */
        const interval = setInterval(() => {
          dispatch('checkAuthTimeout', Date.now());
        }, 3000);
        commit(types.SET_AUTH_INTERVAL, interval);
      },
      clearAllTimeouts({ commit, dispatch }) {
        dispatch('clearAuthInterval');
        commit(types.SET_AUTH_TIMEOUT_WARNING, null);
        commit(types.SET_AUTH_TIMEOUT, null);
      },
      clearAuthInterval({ commit }) {
        const interval = this.getters['timeout/getAuthInterval'];
        clearInterval(interval);
        commit(types.SET_AUTH_INTERVAL, null);
      },
      clearAuthTimeoutWarning({ commit }) {
        commit(types.SET_AUTH_TIMEOUT_WARNING, null);
      },
      checkAuthTimeout({ commit, dispatch }, time) {
        const diff = time - this.getters['timeout/getAuthTimeout'];
        /* 30 minutes */
        const logoutTime = 30 * 60 * 1000;

        /* 28 minutes */
        const warningTime = 28 * 60 * 1000;

        if (diff >= logoutTime) {
          dispatch('clearAllTimeouts');
          dispatch('login/logout', null, { root: true });
        } else if (diff >= warningTime) {
          commit(types.SET_AUTH_TIMEOUT_WARNING, Date.now());
        }
      },
      clearStore() {}, // Logout cleans this up
    };

    this.mutations = {
      [types.SET_AUTH_TIMEOUT](state, val) {
        state.authTimeout = val;
      },
      [types.SET_AUTH_TIMEOUT_WARNING](state, val) {
        state.authTimeoutWarning = val;
      },
      [types.SET_AUTH_INTERVAL](state, interval) {
        state.authInterval = interval;
      },
    };
  }
}

export default TimeoutStore;
