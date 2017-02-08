const bl = require('bl');
const http = require('http');

http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
        const str_data = data.toString();
        console.log(str_data.length);
        console.log(str_data);
    }));
});