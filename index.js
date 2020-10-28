var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("<h1>It's working Bro!</h1>");
});

app.listen('8000', () => {
    console.log('Server Started on port 8000');
});
