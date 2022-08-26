//express boilerplate
var express = require('express');
var app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('Hello World');
});