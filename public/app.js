'use strict';

function CalorieCounter() {
  this.request = new Request();
  this.view = new View();
  this.controller = new Controller(this.request, this.view);
}

var calorieApp = new CalorieCounter();

calorieApp.controller.showCurrentItems();