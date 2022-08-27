var express = require('express');
//path
var path = require('path');
var app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
//static content
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(
    PORT,
    () => console.log(`running on port ${PORT}`)
)