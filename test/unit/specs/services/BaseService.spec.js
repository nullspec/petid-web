import BaseService from '@/services/BaseService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('BaseService Service', () => {
  it('returns response times', async () => {
    const mock = new MockAdapter(axios, { delayResponse: 100 });
    mock.onGet('/users').reply(200, {
      users: [
        { id: 1, name: 'John Smith' },
      ],
    });

    const resp = await BaseService.perform(axios.get('/users'));
    expect(resp.duration).toBeGreaterThan(50);
  });
});
