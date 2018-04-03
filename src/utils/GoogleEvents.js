class GoogleEvents {
  static send(config) {
    const { method, url } = config;
    if (window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'api',
        eventAction: method,
        eventLabel: url,
        transport: 'beacon',
      });
    }
  }
}

export default GoogleEvents;
