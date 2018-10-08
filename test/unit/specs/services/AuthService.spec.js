import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AuthenticationStore from '@/store/AuthenticationStore';
import * as types from '@/store/mutation-types';

describe('AuthService Service', () => {
  let mock;
  let data;

  const accessToken = '1231321-4654564';
  beforeEach(() => {
    mock = new MockAdapter(axios);
    data = { response: true };
  });


  it('sets setAuthToken', () => {
    const context = {
      commit: jest.fn(),
    };
    const authStore = new AuthenticationStore();
    authStore.actions.setAuthToken(context, accessToken);
    expect(context.commit).toHaveBeenCalledWith(types.SET_AUTH_TOKEN, accessToken);
  });

  it('sets removeAuthToken', () => {
    const context = {
      commit: jest.fn(),
    };
    const authStore = new AuthenticationStore();
    authStore.actions.removeAuthToken(context);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });
});
