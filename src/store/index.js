import Vue from 'vue';
import Vuex from 'vuex';

/* Global state store authentication and things that are global to the app */
import AppStoreModule from '@/store/AppStoreModule';

/* Base module for non customized modules */
// import BaseStoreModule from '@/store/BaseStoreModule';

// /* Storing Authentication */
// import AuthenticationStore from '@/store/AuthenticationStore';

// /* Storing Login State */
// import LoginStore from '@/store/LoginStore';

/* Storing Timeouts */
// import TimeoutStore from '@/store/TimeoutStore';

// const authentication = new AuthenticationStore();
// const login = new LoginStore();
// const timeout = new TimeoutStore();
const app = new AppStoreModule();

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    app,
  },
  strict: debug,
});
