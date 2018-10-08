import * as types from '@/store/mutation-types';
import AuthenticationStore from '@/store/AuthenticationStore';

describe('AuthenticationStore Store', () => {
  let state;
  let authStore;
  let fakeAuthToken;

  beforeEach(() => {
    state = {
      token: null,
    };

    fakeAuthToken = '123-123-456';

    authStore = new AuthenticationStore();
  });

  it('mutates SET_AUTH_TOKEN', () => {
    authStore.mutations[types.SET_AUTH_TOKEN](state, fakeAuthToken);
    expect(state.token).toEqual(fakeAuthToken);
  });

  it('getAuthToken returns the authtoken', () => {
    authStore.mutations[types.SET_AUTH_TOKEN](state, fakeAuthToken);
    expect(authStore.getters.getAuthToken(state)).toEqual(fakeAuthToken);
    // expect(localStorage.setItem).toHaveBeenLastCalledWith('token', fakeAuthToken);
  });

  it('mutates REMOVE_AUTH_TOKEN', () => {
    authStore.mutations[types.REMOVE_AUTH_TOKEN](state);
    expect(state.token).toEqual(null);
    // expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
  });

  it('getAuthToken returns the authtoken', () => {
    authStore.mutations[types.REMOVE_AUTH_TOKEN](state);
    expect(authStore.getters.getAuthToken(state)).toEqual(null);
  });
});
