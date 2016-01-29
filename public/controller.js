'use strict';

function Controller(request, view) {
  var _this = this;
  this.request = request;
  this.view = view;

  this.view.addItemButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (_this.view.contentChecker()) {
      _this.request.post(_this.createData(), _this.view.listMeals);
    }
    _this.view.cleanContent();
  });

  this.view.list.addEventListener('click', function(event) {
    if (event.target.className === 'glyphicon glyphicon-scissors') {
      _this.request.del(event.target.parentNode.parentNode.parentNode.id, _this.view.deleteElement);
    }
  });

  this.view.filterButton.addEventListener('click', function() {
    _this.view.filter(_this.view.filterDate.value);
    _this.view.filterDate.value = '';
    _this.view.currentCalorieConsumption(_this.sumCalories());
  });

  this.showCurrentItems = function() {
    this.request.get(this.view.listMeals);
  };

  this.sumCalories = function() {
    const calories = Array.from(document.querySelectorAll('.calorie'));
    return calories
           .reduce((count, calorie) => calorie.parentNode.style.display === 'table-row'
           ? count + Number(calorie.innerText)
           : count, 0);
  };

  this.createData = function() {
    return {
      name : _this.view.MealNameInput.value,
      calories : _this.view.MealKcalInput.value,
      date: _this.view.MealDateInput.value
    };
  };
}

