var express = require('express');
var router = express.Router();
var http = require('http');
var restHandler = require('../Utils/restHandler');

var options = {
    host: 'www.google.com',
    // path: '/finance/option_chain?q=AAPL&output=json'
    // method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json'
    // }
};

router.get('/', function(req, res, next){
  console.log(options);
  options.path = '/finance/option_chain?q='+req.query.id+'&output=json';

  console.log(options.path);

  restHandler.getJSON(options,
          function(statusCode, result)
          {
              res.statusCode = statusCode;
              res.send(result);
          });
});


module.exports = router;
