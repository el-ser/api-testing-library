const packages = require('../../utils/packages');

class Reqres { 
    constructor(baseUrl, package) { 
        this.baseUrl = baseUrl;
        this.sendRequest = packages[package].sendRequest;
        this.payload = {}
    }

    getUsersList(params) {
        const config = {
            baseUrl = this.baseUrl,
            params: params,
            path: '/api/users'
        }
        const response = this.sendRequest(config);
        return response;
    }
}

module.exports = Reqres