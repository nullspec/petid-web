import { shallow, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import Router from 'vue-router';

import Login from '@/components/Login';
import loginMock from '../mocks/loginMock';

const localVue = createLocalVue();
localVue.use(Vuex, Router);

const router = new Router({
  routes: [
    {
      path: '/workspace',
      name: 'WorkspaceUsers',
    },
  ],
});

describe('Login', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        login: {
          ...loginMock,
        },
      },
    });

    wrapper = shallow(Login, { store, localVue, router });
  });

  it('sets the initial variables', () => {
    expect(wrapper.vm.username).toEqual('');
  });
});
