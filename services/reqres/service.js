const packages = require("../../utils/packages");

class Reqres {
  constructor(baseUrl, packageName) {
    this.baseUrl = baseUrl;
    this.sendRequest = packages[packageName].sendRequest;
    this.payload = {};
  }

  getUsersList(params) {
    const config = {
      baseUrl: this.baseUrl,
      params: params,
      path: "/api/users",
    };
    const response = this.sendRequest(config);
    return response;
  }

  getSingleUser(id) {
    const config = {
      base: this.baseUrl,
      path: "/api/users/" + id,
    };
    const response = this.sendRequest(config);
    return response;
  }
}

module.exports = Reqres;
