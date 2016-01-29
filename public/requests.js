'use strict';

function Request() {
  this.url = 'http://localhost:3000/meals';

  this.post = function(data, cb) {
    createRequest('POST', this.url, data, cb);
  };

  this.get = function(cb) {
    createRequest('GET', this.url, null, cb);
  };

  this.del = function(id, cb) {
    var url = this.url + '/' + id;
    createRequest('DELETE', url, null, cb);
  };
}
