

var multer = require('multer');

const path   = require('path');
/** For id card pdf  */

/** Storage Engine for title deed */
const storageEngine = multer.diskStorage({
  destination: './public/files',
  filename: function(req, file, fn){
    // console.log(file);
    // console.log(req.body)
    var filename = 'idcard'+Math.random();
    file['filename']= filename;
    fn(null, filename);
  }
});
//////////////////////////////////////////////////land tax

//init  for id card pdf 

const fileUploadSettings =  multer({
    storage: storageEngine,
    // limits: { fileSize:200000000000000000},
    // fileFilter: function(req, file, callback){
    //   validateFile(file, callback);
    // }
  }).single('idcard');

/////////////////common validation
  var validateFile = function(file, cb ){
    allowedFileTypes = /jpeg|jpg|png|doc|pdf|docx|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType  = allowedFileTypes.test(file.mimetype);
    if(extension && mimeType){
      return cb(null, true);
    }else{
      cb("Invalid file type. Only JPEG, PNG,PDF and GIF file are allowed.");
    }
  }





module.exports = fileUploadSettings;


