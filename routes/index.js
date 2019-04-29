const express = require('express');
const router = express.Router();
const flyController = require('../controller/flyController');

/* GET Fly informations. */
router.get('/api/flights', flyController.getAggregatedFly);

module.exports = router;
