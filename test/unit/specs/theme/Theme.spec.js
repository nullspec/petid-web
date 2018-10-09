import Theme from '@/theme/Theme';

describe('Theme ', () => {
  it('Theme brings back an object', () => {
    const t = new Theme();
    expect(t).toBeInstanceOf(Object);
  });
});
