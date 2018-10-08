import * as types from '@/store/mutation-types';
import LoginStore from '@/store/LoginStore';

describe('AlertMessageStore Store', () => {
  let state;
  let loginStoreModule;
  let now;

  beforeEach(() => {
    state = {
      loginFailed: null,
    };

    loginStoreModule = new LoginStore();
    now = Date.now();
    loginStoreModule.mutations[types.LOGIN_FAILED](state, now);
  });

  it('mutates LOGIN_FAILED', () => {
    loginStoreModule.mutations[types.LOGIN_FAILED](state, now);
    expect(state.loginFailed).toEqual(now);
  });

  it('getFailed', () => {
    expect(loginStoreModule.getters.getFailed(state)).toEqual(now);
  });

  it('Actions logout', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn(),
    };
    loginStoreModule.actions.logout(context);
    expect(context.dispatch).toHaveBeenCalledTimes(2);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  it('Actions failed', () => {
    const context = {
      commit: jest.fn(),
    };
    loginStoreModule.actions.failed(context);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });
});
