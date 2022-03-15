const pactum = require("pactum");

const convertConfig = function (obj) {
  const config = {
    withPath: obj.baseUrl + obj.path,
  };

  if ("params" in Object.getOwnPropertyNames(obj)) {
    config.withQueryParams = obj.params;
  }

  return config;
};

const sendRequest = function (obj) {
  const config = convertConfig(obj);
  const spec = pactum.spec();

  for (const key in config) {
    const value = config[key];
    spec[key](value);
  }

  return spec;
};

module.exports = {
  sendRequest,
};
