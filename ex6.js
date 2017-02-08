const dirFilter = require('./module6');

dirFilter(process.argv[2], process.argv[3], function(err, data){
    console.log(data);
});

