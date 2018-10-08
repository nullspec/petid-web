import axios from 'axios';
import store from '@/store';
// import ServiceUrlProvider from '@/utils/ServiceUrlProvider';
// import GoogleEvents from '@/utils/GoogleEvents';

export default function Interceptors() {
  axios.interceptors.request.use((config) => {
    /* Send events to google analytics */
    // GoogleEvents.send(config);

    const token = store.getters['authentication/getAuthToken'];
    store.dispatch('timeout/startLogoutTimer');

    const myConfig = config;
    if (token) {
      myConfig.headers.Authorization = `Bearer ${token}`;
    }

    return myConfig;
  }, err => (
    Promise.reject(err)
  ));

  axios.interceptors.response.use((response) => {
    if (response.status === 401) {
      store.actions.logout();
    }
    return response;
  }, (err) => {
    if (err.response.status === 401) {
      store.dispatch('logout');
    }
    return Promise.resolve(err.response);
  });
}
