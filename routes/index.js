const express = require('express');
const router = express.Router();
const FlyController = require('../controller/flyController');

/* GET Fly informations. */
router.get('/api/flights', function(req, res) {
    let controller = new FlyController;
    controller.getAggregatedFly(req, res);
});

module.exports = router;
