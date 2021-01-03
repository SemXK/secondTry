var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('bella zi<a href="/users/cool">!!!</a>');
});

router.get('/cool', function(req, res, next) {
	res.send('you\'re cool tho');
})

module.exports = router;
