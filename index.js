var express = require('express');
var path = require('path');
var Unblocker = require('unblocker');
var unblocker = new Unblocker({prefix: '/proxy/api/proxy/'});
var app = express();
const PORT = 8080;

//hide-inator proxy
app.use(unblocker);
//url-encoded
app.use(express.urlencoded({extended: true}));
//static content
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/proxy', function (req, res) {
    res.sendFile(__dirname + '/public/html/proxy.html');
});

app.get('/faq', function (req, res) {
    res.sendFile(__dirname + '/public/html/faq.html');
});

app.listen(PORT, () => console.log(`running on port ${PORT}`)).on('upgrade', unblocker.onUpgrade);

module.exports = app;