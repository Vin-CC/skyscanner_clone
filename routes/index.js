const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../bin/config');
const authUtils = require('../utils/authUtils');
const rateLimiterRedisMiddleware = require('../utils/rateLimiterUtils');
const FlyController = require('../controller/flyController');

/* GET Fly informations. */
router.get('/api/flights', rateLimiterRedisMiddleware, authUtils.veryifToken, function(req, res) {
    jwt.verify(req.token, config.privateKey, function(err, authData) {
        if(err) {
            res.sendStatus(403);
        } else {
            let controller = new FlyController;
            controller.getAggregatedFly(req, res);
        }
    });
});

router.post('/auth', rateLimiterRedisMiddleware, function(req, res) {
    jwt.sign(config.user, config.privateKey, config.expireTime, function(err, token) {
        res.json({token});
    });
});

module.exports = router;
