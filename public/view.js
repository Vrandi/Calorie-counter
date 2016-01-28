'use strict';

function View() {
  var _this = this;
  this.list = document.querySelector('.meals');

  this.listMeals = function(response) {
    response.forEach(function(meal) { _this.addElements(meal) });
  };

  this.addElements = function(meal) {
    var element = template(meal);
    _this.list.innerHTML += element;
  };

  this.deleteElement = function(id) {
    var meal = document.getElementById(id);
    meal.remove();
  };

  this.filter = function(date) {
    var dates = document.querySelectorAll('.meal-date');
    [].forEach.call(dates, function(item) {
       item.parentNode.style.display = (date && (date != displayDate(item)))
       ? "none"
       : "table-row";
    });
  };

}