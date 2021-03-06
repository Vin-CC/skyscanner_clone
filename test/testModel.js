const assert = require('assert');
const flyModel = require('../models/flyModel');
const config = require('../bin/config');

describe('Content from suppliers formated', function() {
    describe('AIR_MOON', function() {
        let result  = "";
        beforeEach(function(done) {
            flyModel.getMoonFly()
            .then(function(response) {
                result = response;
                done();
            })
            .catch(function (err) {
                result = err;
                done();
            });
        });
        it('Data from the supplier AIR_MOON formated', function() {
            result.forEach(function(element) {
                assert.ok("provider" in element);
                assert.ok("price" in element);
                assert.ok("departure_time" in element);
                assert.ok("arrival_time" in element);
            });
        });
    });
    describe('AIR_JAZZ', function() {
        let result  = "";
        beforeEach(function(done) {
            flyModel.getJazzFly()
            .then(function(response) {
                result = response;
                done();
            })
            .catch(function (err) {
                result = err;
                done();
            });
        });
        it('Data from the supplier AIR_JAZZ formated', function() {
            result.forEach(function(element) {
                assert.ok("provider" in element);
                assert.ok("price" in element);
                assert.ok("departure_time" in element);
                assert.ok("arrival_time" in element);
            });
        });
    });
    describe('AIR_BEAM', function() {
        let result  = "";
        beforeEach(function(done) {
            flyModel.getBeamFly()
            .then(function(response) {
                result = response;
                done();
            })
            .catch(function (err) {
                result = err;
                done();
            });
        });
        it('Data from the supplier AIR_BEAM formated', function() {
            result.forEach(function(element) {
                assert.ok("provider" in element);
                assert.ok("price" in element);
                assert.ok("departure_time" in element);
                assert.ok("arrival_time" in element);
            });
        });
    });
});
