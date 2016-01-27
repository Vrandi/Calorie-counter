'use strict';

function View() {
  var _this = this;
  this.MealNameInput = document.querySelector('#food');
  this.MealKcalInput = document.querySelector('#kcal');
  this.MealDateInput = document.querySelector('#date');
  this.addItemButton = document.querySelector('.add-item-button');
  this.list = document.querySelector('.meals');

  this.listMeals = function(response) {
    var Meals = JSON.parse(response);
    Meals.forEach(function(meal) { _this.addElements(meal) });
  };

  this.addElements = function(meal) {
    var element = this.createMeals(meal);
    this.list.innerHTML += element;
  };

  this.createMeals = function(meal) {
    var element = `<tr id="${meal.meals_id}">
                     <td>${meal.name}</td>
                     <td>${meal.calories}</td>
                     <td>${this.dateFormat(meal.date)}</td>
                   </tr>`;
    return element;
  };

  this.dateFormat = function(date) {
    return date.split('T')[0];
  }

}