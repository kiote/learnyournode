const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err);
        }
        for(let i=0; i < list.length; i++) {
            if (path.extname(list[i]) == '.' + extension) {
                callback(null, list[i]);
            }
        }
    });
};