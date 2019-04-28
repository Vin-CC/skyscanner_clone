var FlyDto = require('../dto/flyDto');
var config = require('../../bin/config');

class FlyMapper {
    jazzMapper(data) {
        var jazzerFly = new FlyDto();
        jazzerFly.setProvider(config.providers.AIR_JAZZ.uppercase);
        jazzerFly.setPrice(data.price);
        jazzerFly.setDepartureTime(data.dtime);
        jazzerFly.setArrivalTime(data.atime);
        return jazzerFly.toObject();
    }
    moonMapper(data) {
        var moonFly = new FlyDto();
        moonFly.setProvider(config.providers.AIR_MOON.uppercase);
        moonFly.setPrice(data.price);
        moonFly.setDepartureTime(data.departure_time);
        moonFly.setArrivalTime(data.arrival_time);
        return moonFly.toObject();
    }
    beamMapper(data) {
        var beamFly = new FlyDto();
        beamFly.setProvider(config.providers.AIR_BEAM.uppercase);
        beamFly.setPrice(data.p);
        beamFly.setDepartureTime(data.departure);
        beamFly.setArrivalTime(data.arrival);
        return beamFly.toObject();
    }
    jazzAllMapper(list) {
        var formatedList = [],
            that = this;
        list.forEach(function(element) {
            formatedList.push(that.jazzMapper(element));
        });
        return formatedList;
    }
    moonAllMapper(list) {
        var formatedList = [],
            that = this;
        list.forEach(function(element) {
            formatedList.push(that.moonMapper(element));
        });
        return formatedList;
    }
    beamAllMapper(list) {
        var arr = list.split("\n"),
            formatedList = [],
            headers = arr[0].split(',');
        for(var i = 1; i < arr.length; i++) {
          var data = arr[i].split(',');
          var obj = {};
          for(var j = 0; j < data.length; j++) {
             obj[headers[j].trim()] = data[j].trim();
          }
          formatedList.push(this.beamMapper(obj));
        }
        return formatedList;

    }
}

module.exports = new FlyMapper;
