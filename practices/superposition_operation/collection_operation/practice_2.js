'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = [];

  for (var index in collection) {
    if (collection[index] % 2 != 0) result.push(collection[index] * 3 + 2);
  }

  return result;
}

module.exports = hybrid_operation_to_uneven;

