var fs = require('fs');

exports.existsFile = function(name, cb) {
  return fs.exists(name, cb);
};
