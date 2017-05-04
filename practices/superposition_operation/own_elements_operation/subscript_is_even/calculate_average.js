'use strict';
var calculate_average = function (collection) {
  var result = 0;
  var number = 0;

  for (var index in collection) {
    result += collection[index] % 2 === 0 ? collection[index] : 0;
    number += collection[index] % 2 === 0 ? 1 : 0;
  }

  return result / number;
};
module.exports = calculate_average;
