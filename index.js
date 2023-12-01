const file_one = require("./includes/file_one");
const file_two = require("./includes/file_two");

module.exports = (params) => {

    params = {
      // TODO: set default params
      ...params
    };

    // Publish and return datasets.
    let result = {
      file_one: file_one(params),
      file_two: file_two(params),
    };

    return result;
}

