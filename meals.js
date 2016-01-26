'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'dagi',
  database: 'meals'
});

connection.connect();

function AddItem(params, cb) {
  connection.query('INSERT INTO meals SET ?', params, function(err, result) {
    if (err) throw err;
    cb({"status": "ok"});
  });
}

function GetItems(cb) {
  connection.query('SELECT meals_id, name, calories, date FROM meals', function(err, result) {
    if (err) throw err;
    cb(result);
  });
}

function DeleteItem(id, cb) {
  connection.guery('DELETE FROM meals WHERE meals_id= ?', id, function(err, result) {
    if (err) throw err;
    cb({"status" : "ok"});
  });
}

module.exports = {
  add: AddItem,
  getall: GetItems,
  deleteItem: DeleteItem
}