'use strict';

var express = require('express');
var service = require('./mysqlservice.js');
service.init();
var meals = require('./meals.js');

var bodyParser = require('body-parser');
var app = express();

app.use(logRequest);
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/meals', function(req, res) {
  meals.add(req.body, function(response) {
    res.json(response);
  });
})

app.get('/meals', function(req, res) {
  meals.getall(function(response) {
    res.json(response);
  })
})

app.delete('/meals/:id', function(req, res) {
  meals.deleteItem(req.params.id, function(response) {
    res.json(response);
  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000...');
})

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  console.log(parts.join(" "));

  next();
}
