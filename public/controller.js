'use strict';

function Controller(request, view) {
  var _this = this;
  this.request = request;
  this.view = view;

  this.currentDate = new Date().toJSON().replace(/:\d\d\..+$/g, '');

  this.MealNameInput = document.querySelector('#food');
  this.MealKcalInput = document.querySelector('#kcal');
  this.MealDateInput = document.querySelector('#date');
  this.addItemButton = document.querySelector('.add-item-button');
  this.MealDateInput.defaultValue = this.currentDate;

  this.addItemButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (_this.contentChecker) {
      _this.request.post(_this.createData(), _this.view.listMeals);
    }
    _this.cleanContent();
  });

  this.showCurrentItems = function() {
    this.request.get(this.view.listMeals);
  };

  this.contentChecker = function() {
    return (this.MealNameInput.value != '' && this.MealKcalInput != '');
  };

  this.cleanContent = function() {
    this.MealNameInput.value = '';
    this.MealKcalInput.value = '';
  };

  this.createData = function() {
    return {
      name : _this.MealNameInput.value,
      calories : _this.MealKcalInput.value,
      date: _this.MealDateInput.value
    };
  };

}

