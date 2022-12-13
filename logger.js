console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/lo';

function  log(message) {
    //send http request
    console.log(message);

}
module.exports = log;
//module.exports.endpoint = url;
