import * as types from '@/store/mutation-types';
import BaseStoreModule from '@/store/BaseStoreModule';

describe('BaseStoreModule Store', () => {
  let state;
  let baseStore;
  let keyMock;
  let allMock;
  let currentMock;
  let newMock;
  const component = 'Bestest';


  beforeEach(() => {
    state = {
      key: null,
      all: [],
      current: {},
      loaded: false,
      component,
    };

    baseStore = new BaseStoreModule(component);

    keyMock = 'code';
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
    currentMock = {
      code: 'two',
    };
    newMock = {
      code: 'four',
    };

    baseStore.mutations[types.SET_KEY](state, keyMock);
    baseStore.mutations[types.SET_ALL](state, allMock);
    baseStore.mutations[types.SET_LOADED](state, true);
    baseStore.mutations[types.SET](state, currentMock);

    baseStore.mutations[types.DELETE](state, 3);
    // baseStore.mutations[types.UPDATE_BY_INDEX](state, 3);
  });

  it('mutates SET_KEY', () => {
    expect(state.key).toEqual(keyMock);
  });

  it('mutates SET_ALL', () => {
    expect(state.all).toEqual(allMock);
    expect(baseStore.getters.getAll(state)).toEqual(allMock);
  });

  it('mutates SET_LOADED', () => {
    expect(state.loaded).toEqual(true);
  });

  it('mutates SET', () => {
    expect(state.current).toEqual(currentMock);
  });

  it('mutates ADD', () => {
    baseStore.mutations[types.ADD](state, newMock);
    expect(state.all.length).toEqual(4);
  });

  it('mutates DELETE', () => {
    baseStore.mutations[types.ADD](state, newMock);
    expect(state.all.length).toEqual(4);
    baseStore.mutations[types.DELETE](state, 3);
    expect(state.all.length).toEqual(3);
  });

  it('gets getFirst', () => {
    expect(baseStore.getters.getFirst(state)).toEqual(allMock[0]);
  });

  it('Actions updateItems', () => {
    const context = {
      state,
      commit: jest.fn(),
      getters: {
        getIndexByKey: jest.fn(),
      },
    };
    baseStore.actions.updateItems(context, newMock);
    expect(context.getters.getIndexByKey).toHaveBeenCalledTimes(1);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  it('Actions update', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn(),
    };
    baseStore.actions.update(context, newMock);
    expect(context.dispatch).toHaveBeenCalledTimes(1);
  });

  it('Actions add', () => {
    const context = {
      commit: jest.fn(),
    };
    baseStore.actions.add(context, newMock);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  it('Actions setStoreKey', () => {
    const context = {
      commit: jest.fn(),
    };
    baseStore.actions.setStoreKey(context, keyMock);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  it('Actions setLoaded', () => {
    const context = {
      commit: jest.fn(),
    };
    baseStore.actions.setLoaded(context);
    expect(context.commit).toHaveBeenCalledTimes(1);
  });

  // it('Actions setAll no results', () => {
  //   const context = {
  //     dispatch: jest.fn(),
  //     commit: jest.fn(),
  //   };
  //   baseStore.actions.setAll(context, []);
  //   expect(context.dispatch).toHaveBeenCalledTimes(1);
  //   expect(context.commit).toHaveBeenCalledTimes(1);
  // });

  // it('Actions setAll some results', () => {
  //   const context = {
  //     dispatch: jest.fn(),
  //     commit: jest.fn(),
  //   };
  //   baseStore.actions.setAll(context, ['garbage']);
  //   expect(context.dispatch).toHaveBeenCalledTimes(2);
  // });

  it('Actions setSaveResponse 200', () => {
    const context = {
      dispatch: jest.fn(),
    };

    baseStore.actions.setSaveResponse(context, {
      status: 200,
      data: 'somedata',
    });
    expect(context.dispatch).toHaveBeenCalledTimes(1);
  });

  it('Actions setSaveResponse 201', () => {
    const context = {
      dispatch: jest.fn(),
    };
    baseStore.actions.setSaveResponse(context, {
      status: 201,
      data: 'somedata',
    });
    expect(context.dispatch).toHaveBeenCalledTimes(1);
  });

  it('Actions setSaveResponse 409', () => {
    const context = {
      dispatch: jest.fn(),
    };
    baseStore.actions.setSaveResponse(context, {
      status: 409,
      data: 'somedata',
    });
    expect(context.dispatch).toHaveBeenCalledTimes(1);
  });
});
