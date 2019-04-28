var axios  = require('axios');
var config = require('../bin/config');

var token = "e10e4cb0";
var url = "https://my.api.mockaroo.com"

class FlyService {
    getFly(provider) {
        var jazzUrl = config.providers_url + "/" + provider + "/flights?key=" + config.token;

        return new Promise(function(resolve,reject) {
            axios.get(jazzUrl)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        });
    }
}

module.exports = new FlyService();