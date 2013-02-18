
/*
 * GET home page.
 */

var pjson = require('../package.json');

exports.index = function(req, res){
  res.render('index', { pjson: pjson })
};
