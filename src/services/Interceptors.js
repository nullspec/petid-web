import axios from 'axios';
// import GoogleEvents from '@/utils/GoogleEvents';

/* eslint-disable */
export default function Interceptors() {
  axios.interceptors.request.use((config) => {
    /* Send events to google analytics */
    // GoogleEvents.send(config);
    return config;
  }, err => (
    Promise.reject(err)
  ));
}
