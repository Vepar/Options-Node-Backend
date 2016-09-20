var http = require("http");
var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.getJSON = function(options, onResult)
{

  callback = function(response) {
    var body = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      body += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      onResult(response.statusCode, body);
    });
  }

  http.request(options, callback).end()
};
