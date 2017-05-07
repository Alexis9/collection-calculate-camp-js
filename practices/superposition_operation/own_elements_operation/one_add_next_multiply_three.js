'use strict';
function one_add_next_multiply_three(collection) {
  var result = [];

  for (var index = 0; index < collection.length; ++index) {
    if (index == collection.length - 1) {
      collection.pop();
    } else {
      result.push((parseInt(collection[index]) + parseInt(collection[index + 1])) * 3);
    }
  }

  return result;
}
module.exports = one_add_next_multiply_three;
