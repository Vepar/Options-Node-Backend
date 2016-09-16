var express = require('express');
var router = express.Router();
var yahooFinance = require('yahoo-finance');

/* GET home page. */
router.get('/', function(req, res, next) {
  yahooFinance.historical({
    symbol: 'AAPL',
    from: '2012-01-01',
    to: '2012-12-31',
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
