var express = require('express');
var router = express.Router();
const shell = require('shelljs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // shell.exec('google-chrome https://keralapolice.s3.ap-south-1.amazonaws.com/kpbot/id_card0.08159368260357325 --kiosk --kiosk-printing')
});

module.exports = router;
