'use strict';

function template(item) {
  var element = `<tr id="${item.meals_id}" class="meal">
                     <td>${item.name}</td>
                     <td class="calorie">${item.calories}</td>
                     <td class="meal-date">${dateFormat(item.date)}</td>
                     <td><button class="delete"><span class="glyphicon glyphicon-scissors"></span></button></td>
                   </tr>`;
  return element;
}