var express = require('express');
var router = express.Router();
var yahooFinance = require('yahoo-finance');
var OAuth = require('oauth').OAuth;


router.get('/chart', function(req, res) {
  var ticket = req.query.ticker;
  var duration = req.query.duration;
  res.send('ok');
});


/* GET home page. */
router.get('/historical', function(req, res, next) {
  var ticker = req.query.ticker;
  //these must be in yyyy-mm-dd format
  var durationFrom = req.query.durationFrom;
  var durationTo = req.query.durationTo;

  console.log(ticker);
  console.log(durationFrom);
  console.log(durationTo);


  yahooFinance.historical({
    symbol: ticker,
    from: durationFrom,
    to: durationTo,
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, function (err, quotes) {
    res.send(quotes);
  });
});

router.get('/:symbol', function(req, res, next) {
  yahooFinance.snapshot({
    symbol: req.params.symbol,
    // fields: FIELDS  // ex: ['s', 'n', 'd1', 'l1', 'y', 'r']
  }, function (err, snapshot) {
    res.send(snapshot);
  });
});

module.exports = router;
