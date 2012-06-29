var spawn = require('child_process').spawn;

module.exports = function (string, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = [];
    }
    
    if (!opts) opts = [];

    var fig = spawn("figlet", [ opts, string ]); 
    fig.stdout.on('data', function (data) {
      cb(data);
    });

    fig.on('exit', function (code) {
        if (code === 127) console.log("Figlet command not found. Please install from http://www.figlet.org");
    });

};
