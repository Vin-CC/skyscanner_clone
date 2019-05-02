const assert = require('assert');
const flyService = require('../service/flyService');
const config = require('../bin/config');

describe('Get content from suppliers', function() {
    describe('AIR_MOON', function() {
        let result  = "";
        beforeEach(function(done) {
            flyService.getFly(config.providers.AIR_MOON.lowercase)
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
            assert.ok(result.length);
        });
    });
    describe('AIR_JAZZ', function() {
        let result  = "";
        beforeEach(function(done) {
            flyService.getFly(config.providers.AIR_JAZZ.lowercase)
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
            assert.ok(result.length);
        });
    });
    describe('AIR_BEAM', function() {
        let result  = "";
        beforeEach(function(done) {
            flyService.getFly(config.providers.AIR_BEAM.lowercase)
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
            assert.ok(result.length);
        });
    });
});
