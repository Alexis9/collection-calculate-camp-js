'use strict';
var is_exist_element = function (collection, element) {
  var exist_number_four = false;
  var exist_number_three = false;

  for (var index in collection) {
    if (collection[index] === 3) exist_number_three = true;
    if (collection[index] === 4) exist_number_four = true;
  }

  return element === 3 ? exist_number_three : !exist_number_four;

};
module.exports = is_exist_element;
