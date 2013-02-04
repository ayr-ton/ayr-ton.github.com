
/*
 * GET home page.
 */

var pjson = require('../package.json');

exports.index = function(req, res){
  res.render('index', { title: pjson.name + ' - v' + pjson.version + ' ' + pjson.milestone, assets: pjson.assets})
};
