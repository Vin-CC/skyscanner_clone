const flyMapper = require("../models/mapper/flyMapper");
const flyModel = require("../models/flyModel");

class FlyController {
    getAggregatedFly(req, res) {
        let listFly = [];
        let that = this;

        let promise1 = new Promise(function(resolve, reject) {
            flyModel.getBeamFly()
            .then(function(response) {
                resolve(response);
            })
            .catch(function(err) {
                reject(err);
            });
        });

        let promise2 = new Promise(function(resolve, reject) {
            flyModel.getJazzFly()
            .then(function(response) {
                resolve(response);
            })
            .catch(function(err) {
                reject(err);
            });
        });

        let promise3 = new Promise(function(resolve, reject) {
            flyModel.getMoonFly()
            .then(function(response) {
                resolve(response);
            })
            .catch(function(err) {
                reject(err);
            });
        });

        Promise.all([promise1, promise2, promise3])
        .then(function(value){
            let newTab = [];
            for(let i = 0; i < value.length; i++) {
                newTab = newTab.concat(value[i]);
            }
            res.json(FlyController.aggregateFly(newTab));
        })
        .catch(function(error) {
            /*res.json(error.message);
            console.log(error.name, error.message);*/
            res.status(500).json({error:true});
        });
    };

    static aggregateFly(listFly) {
        let listAggregated = [];

        listAggregated = listFly.filter(fly => isNaN(fly.price) !== true);
        listAggregated = listAggregated.sort(function(a, b) {
            return a.price - b.price;
        });

        return listAggregated.slice(0, 50);
    }
}

module.exports = FlyController;
