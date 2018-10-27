import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
document.body.setAttribute('data-app', true);

global.scrollTo = jest.fn();
