const file_one = require("./includes/file_one");

module.exports = (params) => {

    params = {
      // TODO: set default params
      ...params
    };

    // Publish and return datasets.
    let result = {
      file_one: file_one(params),
    };

    return result;
}

