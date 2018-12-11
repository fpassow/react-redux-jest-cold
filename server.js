'use strict';

var express = require('express');
var app = express();
var path = require('path')

app.use('/', express.static('build'));

const port = 3000;
app.listen(port);
console.log('Listening on port ' + port + '.');
