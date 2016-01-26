'use strict';

function CalorieApp() {
  this.request = new Request();
  this.view = new View();
  this.request.get(this.view.listMeals);
}

var calorieApp = new CalorieApp()