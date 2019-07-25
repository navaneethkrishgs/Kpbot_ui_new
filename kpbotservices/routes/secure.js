var express = require('express');
var router = express.Router();
const shell = require('shelljs');
var fs = require('fs')

// controllers //
var fileUploadController = require('../controllers/fileupload.controller'); 


// router.get('/awss3url', function(req, res, next) {
//     res.render('index', { title: 'AWS S3' });
// });
// router.post('/awss3url', function(req, res, next) {
// // console.log(req.body.location);
// // console.log(req)
// shell.exec(`google-chrome ${req.body.location} --kiosk --kiosk-printing`);
// res.send('saved');
// });

router.post('/users/idcard', fileUploadController.create);

router.get('/printer', function(req, res, next) {
    res.send('printer');

});
module.exports = router;