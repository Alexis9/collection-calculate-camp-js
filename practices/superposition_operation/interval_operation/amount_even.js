'use strict';

function amount_even(collection) {
  var result = 0;

  for (var index in collection) {
    if (collection[index] % 2 == 0) result += collection[index];
  }

  return result;
}


module.exports = amount_even;
