var express = require('express');
var router = express.Router();

/* GET Fly informations. */
router.get('/', function(req, res, next) {
  res.json({ message: 'some data' });
});

module.exports = router;
