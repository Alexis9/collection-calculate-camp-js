'use strict';

function average_uneven(collection) {

  var result = 0;

  for (var index in collection) {
    if (collection[index] % 2 != 0) result += collection[index];
  }

  return result / collection.length * 2;
}

module.exports = average_uneven;
