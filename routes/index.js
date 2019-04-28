var express = require('express');
var router = express.Router();

/* GET Fly informations. */
router.get('/api/flights', function(req, res, next) {
  res.json({ message: 'some data' });
});

module.exports = router;
