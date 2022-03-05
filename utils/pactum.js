const pactum = require('pactum');

const sendRequest = function(obj) {
    const spec = pactum.spec();
    for (key in obj) {
        const value = obj[key];
        spec[key](value);
    }

    return spec 
}

module.exports = {
    sendRequest
}