class BaseService {
  static async perform(request) {
    const startTime = new Date();
    const resp = await request;
    const endTime = new Date();
    resp.duration = endTime - startTime;
    return resp;
  }
}

export default BaseService;
