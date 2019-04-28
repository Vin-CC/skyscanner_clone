var flyService = require('../service/flyService');
var config = require('../bin/config');
var flyMapper = require('./mapper/flyMapper');

class  FlyModel {

    getJazzFly() {
        return flyService.getFly(config.providers.AIR_JAZZ.lowercase)
        .then(function(response) {
            return flyMapper.jazzAllMapper(response);
        })
        .catch(function(err) {
            return err;
        });;
    }
    getMoonFly() {
        return flyService.getFly(config.providers.AIR_MOON.lowercase)
        .then(function(response) {
            return flyMapper.moonAllMapper(response);
        })
        .catch(function(err) {
            return err;
        });;
    }
    getBeamFly() {
        return flyService.getFly(config.providers.AIR_BEAM.lowercase)
        .then(function(response) {
            return flyMapper.beamAllMapper(response);
        })
        .catch(function(err) {
            return err;
        });;
    }
}

module.exports = new FlyModel();
