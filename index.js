var express = require('express');
var app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(
    PORT,
    () => console.log(`running on port ${PORT}`)
)