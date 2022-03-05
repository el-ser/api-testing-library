const pactum = require('./utils/pactum').sendRequest;
const services = require('./services/');
const packageList = {
    pactum: pactum
}

class API { 
    constructor(package) {
        this.sendRequest = packageList[package];
        this.services = services;
    }
}

module.exports = API;