const loginMock = {
  namespaced: true,
  getters: {
    getFailed: jest.fn(),
  },
  actions: {
    logout: jest.fn(),
    failed: jest.fn(),
  },
};

export default loginMock;
