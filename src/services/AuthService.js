import axios from 'axios';
import ServiceUrlProvider from '@/utils/ServiceUrlProvider';
import BaseService from '@/services/BaseService';

/* eslint-disable no-return-await */

class AuthService extends BaseService {
  static async getToken({ username, password }) {
    try {
      let headers = {};

      if (process.env.NODE_ENV !== 'production') {
        headers = {
          Authorization: 'Basic '.concat(process.env.AP_OAUTH_SECRET),
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      }

      const data = 'username='
        .concat(encodeURIComponent(username))
        .concat('&password=')
        .concat(encodeURIComponent(password))
        .concat('&scope=APP&grant_type=password');

      return await super.perform(axios.post(
        ServiceUrlProvider.userManagerUrl()
          .concat('/oauth/token'),
        data, {
          headers,
        },
      ));
    } catch (err) {
      return err.response;
    }
  }
}

export default AuthService;
