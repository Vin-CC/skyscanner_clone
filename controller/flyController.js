const flyMapper = require("../models/mapper/flyMapper");
const flyModel = require("../models/flyModel");

class FlyController {
    getAggregatedFly(req, res) {
        let listFly = [];
        let that = this;

        let promise1 = new Promise(function(resolve, reject) {
        flyModel.getBeamFly()
        .then(function(response) {
            //listFly.push(...response);
            resolve(...response);
        })
        .catch(function(err) {
            //res.status(500).json({err:true});
            reject(err);
        });
        });

        let promise2 = new Promise(function(resolve, reject) {
        flyModel.getJazzFly()
        .then(function(response) {
            //listFly.push(...response);
            resolve(...response);
        })
        .catch(function(err) {
            //res.status(500).json({err:true});
            reject(err);
        });
        });

        let promise3 = new Promise(function(resolve, reject) {
        flyModel.getMoonFly()
        .then(function(response) {
            //listFly.push(...response);
            resolve(...response);
        })
        .catch(function(err) {
            //res.status(500).json({err:true});
            reject(err);
        });
        });

        Promise.all([promise1, promise2, promise3]).then(function(value) {
            res.json(that.aggregateFly(value));
        });
    }

    aggregateFly(listFly) {
        let listAggregated = [];

        listAggregated = listFly.sort(function(a, b) {
            return a.value - b.value;
        });

        return listAggregated.slice(0, 50);
    }
}

module.exports = new FlyController();
