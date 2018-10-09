import * as types from '@/store/mutation-types';
import BaseStoreModule from '@/store/BaseStoreModule';

describe('BaseStoreModule Store', () => {
  let state;
  let baseStore;
  let allMock;
  const component = 'Bestest';


  beforeEach(() => {
    state = {
      all: [],
    };

    baseStore = new BaseStoreModule(component);

    allMock = [
      {
        code: 'one',
      },
      {
        code: 'two',
      },
      {
        code: 'three',
      },
    ];

    baseStore.mutations[types.SET_ALL](state, allMock);
  });

  it('mutates SET_ALL', () => {
    expect(state.all).toEqual(allMock);
    expect(baseStore.getters.getAll(state)).toEqual(allMock);
  });

  it('clearAll commits a mutation', () => {
    const context = {
      commit: jest.fn(),
    };
    baseStore.actions.clearAll(context);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  it('clearAll commits a mutation', () => {
    const context = {
      dispatch: jest.fn(),
    };
    baseStore.actions.clearStore(context);
    expect(context.dispatch).toHaveBeenCalledTimes(1);
  });
});
