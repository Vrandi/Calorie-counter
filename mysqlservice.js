'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'dagi',
  database: 'meals',
  timezone: 'utc'
});

module.exports.init = function init() {
  connection.connect();
  module.exports.connection = connection;
}
