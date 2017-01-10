var express = require('express');
var path = require('path');
require('./routes.js');

var app = express();

var port = 3000;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});

// server.use('/styles', express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/../client'));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/about.html'));
})

app.get('/works', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/work.html'));
})

module.exports = app;