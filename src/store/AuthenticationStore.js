import authService from '@/services/AuthService';
import * as types from '@/store/mutation-types';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] }]
*/

class AuthenticationStore {
  constructor() {
    this.namespaced = true;

    this.state = {
      token: null,
    };

    this.getters = {
      isAuthenticated: state => state.token != null,
      getAuthToken: state => state.token,
    };

    this.actions = {
      setAuthToken({ commit }, token) {
        commit(types.SET_AUTH_TOKEN, token);
      },
      removeAuthToken({ commit }) {
        commit(types.REMOVE_AUTH_TOKEN);
      },
      clearStore({ dispatch }) {
        dispatch('removeAuthToken');
      },
    };

    this.mutations = {
      [types.SET_AUTH_TOKEN](state, token) {
        state.token = token;
        localStorage.setItem('token', token);
      },
      [types.REMOVE_AUTH_TOKEN](state) {
        state.token = null;
        localStorage.removeItem('token');
      },
    };
  }
}

export default AuthenticationStore;
