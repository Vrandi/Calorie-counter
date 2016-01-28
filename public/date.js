'use strict';

function dateFormat(date) {
  var datetime = new Date(date)
                     .toJSON()
                     .replace(/:\d\d\..+$/g, '')
                     .replace('T', ' ');
  return datetime;
}

function displayDate(item) {
  return item.innerText.split(' ')[0];
}