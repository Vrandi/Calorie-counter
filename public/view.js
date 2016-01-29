'use strict';

function View() {
  var _this = this;
  this.list = document.querySelector('.meals');

  this.currentDate = new Date().toJSON().replace(/:\d\d\..+$/g, '');

  this.MealNameInput = document.querySelector('#food');
  this.MealKcalInput = document.querySelector('#kcal');
  this.MealDateInput = document.querySelector('#date');
  this.addItemButton = document.querySelector('.add-item-button');
  this.MealDateInput.defaultValue = this.currentDate;
  this.filterDate = document.querySelector('.filter-date');
  this.filterButton = document.querySelector('.filter-button');

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

  this.currentCalorieConsumption = function(sum){
    document.querySelector('.sum-calorie').innerText = sum;
  }

  this.contentChecker = function() {
    return (this.MealNameInput.value != '' && this.MealKcalInput != '');
  };

  this.cleanContent = function() {
    this.MealNameInput.value = '';
    this.MealKcalInput.value = '';
    var currentDate = new Date().toJSON().replace(/:\d\d\..+$/g, '');
    this.MealDateInput.value = currentDate;
  };


}