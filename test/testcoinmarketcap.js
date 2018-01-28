var assert = require('assert');

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'trace';

var coinMarketHelper = new (require('../modules/coinmarketcap.js'))(logger);

describe('coinMarketHelper', function () {
    describe('getCurrencyDetails', function () {
        it('gets the currency codes', () => {
            return coinMarketHelper.getCurrencyDetails()
                .then(function (data) {
                    assert(data["bitcoin"] != undefined, "It should return an entry for bitcoin");
                });
        });
    });
});