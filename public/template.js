'use strict';

function template(item) {
  var element = `<tr id="${item.meals_id}" class="meal">
                     <td>${item.name}</td>
                     <td>${item.calories}</td>
                     <td class="meal-date">${dateFormat(item.date)}</td>
                     <td><button class="delete">Delete</button></td>
                   </tr>`;
  return element;
}