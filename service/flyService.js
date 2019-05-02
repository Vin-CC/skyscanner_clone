const axios  = require('axios');
const config = require('../bin/config');


class FlyService {
    getFly(provider) {
        let jazzUrl = config.providers_url + "/" + provider + "/flights?key=" + config.token;

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
