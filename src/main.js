// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import VueClipboard from 'vue-clipboard2';
import VueAnalytics from 'vue-analytics';

import App from '@/App';
import store from '@/store';
import router from '@/router';
import Interceptors from '@/services/Interceptors';

Interceptors();

Vue.use(Vuetify, {
  theme: {
    primary: '#37474F',
    secondary: '#B2DFDB',
    tertiary: '#E0F2F1',
    background: '#ECEFF1',
    accent: '#009688',
    error: '#C62828',
    warning: '#607D8B',
    info: '#607D8B',
    success: '#009688',
    darkText: '#263238',
    lightText: '#CFD8DC',
  },
});

Vue.use(VueClipboard);

Vue.use(VueAnalytics, {
  id: process.env.GOOGLE_TRACKING_ID,
  router,
  autoTracking: {
    exception: true,
    exceptionLogs: false,
  },
});

Vue.config.productionTip = false;

/* Persistant Token Storage */
if (localStorage.getItem('token')) {
  store.dispatch('authentication/setAuthToken', localStorage.getItem('token'));
}
if (localStorage.getItem('apusername')) {
  store.dispatch('app/setUsername', localStorage.getItem('apusername'));
}
if (localStorage.getItem('stickyTenant')) {
  store.dispatch('app/setStickyTenant', localStorage.getItem('stickyTenant'));
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: createElement => (
    createElement(App)
  ),
});
