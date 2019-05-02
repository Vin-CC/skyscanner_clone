const FlyDto = require('../dto/flyDto');
const config = require('../../bin/config');

class FlyMapper {
    jazzMapper(data) {
        let jazzerFly = new FlyDto();
        jazzerFly.setProvider(config.providers.AIR_JAZZ.uppercase);
        jazzerFly.setPrice(data.price);
        jazzerFly.setDepartureTime(data.dtime);
        jazzerFly.setArrivalTime(data.atime);
        return jazzerFly.toObject();
    }
    moonMapper(data) {
        let moonFly = new FlyDto();
        moonFly.setProvider(config.providers.AIR_MOON.uppercase);
        moonFly.setPrice(data.price);
        moonFly.setDepartureTime(data.departure_time);
        moonFly.setArrivalTime(data.arrival_time);
        return moonFly.toObject();
    }
    beamMapper(data) {
        let beamFly = new FlyDto();
        beamFly.setProvider(config.providers.AIR_BEAM.uppercase);
        beamFly.setPrice(parseFloat(data.p));
        beamFly.setDepartureTime(data.departure);
        beamFly.setArrivalTime(data.arrival);
        return beamFly.toObject();
    }
    jazzAllMapper(list) {
        let formatedList = [],
            that = this;
        list.forEach(function(element) {
            formatedList.push(that.jazzMapper(element));
        });
        return formatedList;
    }
    moonAllMapper(list) {
        let formatedList = [],
            that = this;
        list.forEach(function(element) {
            formatedList.push(that.moonMapper(element));
        });
        return formatedList;
    }
    beamAllMapper(list) {
        let arr = list.split("\n"),
            formatedList = [],
            headers = arr[0].split(',');
        for(let i = 1; i < arr.length; i++) {
          let data = arr[i].split(',');
          let obj = {};
          for(let j = 0; j < data.length; j++) {
             obj[headers[j].trim()] = data[j].trim();
          }
          formatedList.push(this.beamMapper(obj));
        }
        return formatedList;

    }
}

module.exports = new FlyMapper;
