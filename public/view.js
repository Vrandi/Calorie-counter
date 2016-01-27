'use strict';

function View() {
  var _this = this;
  this.list = document.querySelector('.meals');

  this.listMeals = function(response) {
    response.forEach(function(meal) { _this.addElements(meal) });
  };

  this.addElements = function(meal) {
    var element = _this.createMeals(meal);
    _this.list.innerHTML += element;
  };

  this.deleteElement = function(id) {
    var meal = document.getElementById(id);
    meal.remove();
  };

  this.createMeals = function(meal) {
    var element = `<tr id="${meal.meals_id}">
                     <td>${meal.name}</td>
                     <td>${meal.calories}</td>
                     <td>${this.dateFormat(meal.date)}</td>
                     <td><button class="delete">Delete</button></td>
                   </tr>`;
    return element;
  };

  this.dateFormat = function(date) {
    return date.split('T')[0];
  };

}