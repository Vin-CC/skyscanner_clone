var assert = require('assert');
var flyService = require('../service/flyService');
var config = require('../bin/config');

describe('Get content from suppliers', function() {
    describe('AIR_MOON', function() {
        var result  = "";
        beforeEach(function(done) {
            flyService.getFly(config.providers.AIR_MOON)
            .then(function(response) {
                result = response;
                done();
            })
            .catch(function (err) {
                result = err;
                done();
            });
        });
        it('should get the data from the supplier AIR_MOON', function() {
            assert.equal(result.length,10);
        });
    });
    describe('AIR_JAZZ', function() {
        var result  = "";
        beforeEach(function(done) {
            flyService.getFly(config.providers.AIR_JAZZ)
            .then(function(response) {
                result = response;
                done();
            })
            .catch(function (err) {
                result = err;
                done();
            });
        });
        it('should get the data from the supplier AIR_JAZZ', function() {
            assert.equal(result.length,10);
        });
    });
    describe('AIR_BEAM', function() {
        var result  = "";
        beforeEach(function(done) {
            flyService.getFly(config.providers.AIR_BEAM)
            .then(function(response) {
                result = response;
                done();
            })
            .catch(function (err) {
                result = err;
                done();
            });
        });
        it('should get the data from the supplier AIR_BEAM', function() {
            assert.equal(result.length,10);
        });
    });
});
