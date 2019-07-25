
const shell = require('shelljs');
var fs = require('fs')
//helpers
var fileUploadSettings = require('../helpers/fileupload.settings');
  /**
 * create upload
 */

module.exports.create = async (req, res) => {
    fileUploadSettings(req, res,(error) => {
        // console.log(req.body)
      if(error){
        res.send(error)
     }else{
       if(req.file == undefined){

         res.send('undefined')

       }else{
        res.send('saved');
        // console.log(req.file.filename)
        fileDetails =  createFile(req,res);
       }
      }
    });
    const createFile = async (req,res) => {
      // var filepath =  "files/"+req.file.filename;
    //   var filepath =  'public/files'+req.file.filename;
        var pathFile = `~/Documents/Kpbot_ui_new/kpbotservices/public/files/${req.file.filename}`
        shell.exec(`lp ${pathFile}`);
    }
}