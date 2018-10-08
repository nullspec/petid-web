import ServiceUrlProvider from '@/utils/ServiceUrlProvider';

describe('ServiceUrlProvider ', () => {
  it('apiUrl brings back the valid string', () => {
    expect(ServiceUrlProvider.apiUrl()).toEqual('/api');
  });
});
