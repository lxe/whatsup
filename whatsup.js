#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var args = process.argv.slice(2);

var command = args.shift();
if (!command) return;

exec('which ' + command, function (error, stdout, stderr) {
  var proc = stdout.trim();
  if (!proc) proc = stderr.split(' ').shift();

  process.argv = [process.argv[0], proc].concat(args);
  require.main = require(proc);

  setInterval(function () {
    console.log(process._getActiveHandles().length);
  }, 250).unref();
});
