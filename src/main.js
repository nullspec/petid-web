import Vue from 'vue';

import 'vuetify/dist/vuetify.min.css';

// import VueAnalytics from 'vue-analytics';

import App from '@/App';
import store from '@/store';
import router from '@/router';
import Interceptors from '@/services/Interceptors';

import '@/plugins/vuetify';

Interceptors();


// Vue.use(VueAnalytics, {
//   id: process.env.GOOGLE_TRACKING_ID,
//   router,
//   autoTracking: {
//     exception: true,
//     exceptionLogs: false,
//   },
// });

Vue.config.productionTip = false;

/* Persistant Token Storage */
if (localStorage.getItem('token')) {
  store.dispatch('authentication/setAuthToken', localStorage.getItem('token'));
}
if (localStorage.getItem('apusername')) {
  store.dispatch('app/setUsername', localStorage.getItem('apusername'));
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
