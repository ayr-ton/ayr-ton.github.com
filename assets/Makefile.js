#!/usr/bin/env node
/**
 * A script for minify all the assets
 */

// Get application info
var libs = {}, app = {}, pjson = require('../package.json');

// Invoke the system
var sys = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

// Versions of files
libs.version = pjson.assets.libs;
app.version= pjson.assets.app;

// All javascripts of site in their respective groups
libs.array = ["jquery-1.8.3.min.js", "jqconsole-2.7.min.js"];
app.array = ["ayr_ton.shell.js"];

/*
exec("ls -la", puts);

for (var i=0; i < libs.array.length; i++) {
	    console.log(libs.array[i]);
};

function main() {};
var main = new main();

function clearjs() {};
var clearjs = new clearjs();

function genjs() {};
var genjs = new genjs();
*/


