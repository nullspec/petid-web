import * as types from '@/store/mutation-types';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] }]
*/

class LoginStore {
  constructor() {
    this.namespaced = true;

    this.state = {
      loginFailed: null,
    };

    this.getters = {
      getFailed: state => state.loginFailed,
    };

    this.actions = {
      logout({ commit, dispatch }) {
        dispatch('authentication/removeAuthToken', null, { root: true });
        dispatch('clearState');
        commit(types.LOGIN_FAILED, null);
      },
      clearState({ dispatch }) {
        /* eslint no-underscore-dangle: 0 */
        Object.entries(this._modules.root._children)
          .forEach(([key]) => {
            const clearMethod = key.concat('/clearStore');
            dispatch(clearMethod, null, { root: true });
          });
      },
      failed({ commit }) {
        commit(types.LOGIN_FAILED, Date.now());
      },
      clearStore() {},
    };

    this.mutations = {
      [types.LOGIN_FAILED](state, date) {
        state.loginFailed = date;
      },
    };
  }
}

export default LoginStore;
