import * as types from '@/store/mutation-types';
import TimeoutStore from '@/store/TimeoutStore';

describe('TimeoutStore Store', () => {
  let state;
  let timeoutStore;
  let now;
  let later;
  let interval;

  beforeEach(() => {
    state = {
      loginFailed: null,
    };

    timeoutStore = new TimeoutStore();
    now = Date.now();
    later = new Date(now + 60000);
    interval = 5000;

    timeoutStore.mutations[types.SET_AUTH_TIMEOUT](state, now);
    timeoutStore.mutations[types.SET_AUTH_TIMEOUT_WARNING](state, later);
    timeoutStore.mutations[types.SET_AUTH_INTERVAL](state, interval);
  });

  it('mutates SET_AUTH_TIMEOUT', () => {
    expect(state.authTimeout).toEqual(now);
  });

  it('getAuthTimeout', () => {
    expect(timeoutStore.getters.getAuthTimeout(state)).toEqual(now);
  });

  it('mutates SET_AUTH_TIMEOUT_WARNING', () => {
    expect(state.authTimeoutWarning).toEqual(later);
  });

  it('getAuthTimeoutWarning', () => {
    expect(timeoutStore.getters.getAuthTimeoutWarning(state)).toEqual(later);
  });

  it('mutates SET_AUTH_TIMEOUT_WARNING', () => {
    expect(state.authTimeoutWarning).toEqual(later);
  });

  it('getAuthTimeoutWarning', () => {
    expect(timeoutStore.getters.getAuthTimeoutWarning(state)).toEqual(later);
  });

  it('mutates SET_AUTH_INTERVAL', () => {
    expect(state.authInterval).toEqual(interval);
  });

  it('getAuthInterval', () => {
    expect(timeoutStore.getters.getAuthInterval(state)).toEqual(interval);
  });

  it('Actions clearAuthTimeoutWarning', () => {
    const context = {
      commit: jest.fn(),
    };
    timeoutStore.actions.clearAuthTimeoutWarning(context);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  it('Actions clearAllTimeouts', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn(),
    };
    timeoutStore.actions.clearAllTimeouts(context);
    expect(context.dispatch).toHaveBeenCalledTimes(1);
    expect(context.commit).toHaveBeenCalledTimes(2);
  });

  it('Actions startLogoutTimer', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn(),
      setInterval: jest.fn(),
    };
    timeoutStore.actions.startLogoutTimer(context);
    expect(context.dispatch).toHaveBeenCalledTimes(1);
    expect(context.commit).toHaveBeenCalledTimes(2);
  });
});
