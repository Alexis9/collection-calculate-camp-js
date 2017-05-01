'use strict';
function map_to_even(collection) {
  for (var index in collection) {
    collection[index] *= 2;
  }

  return collection;
}
module.exports = map_to_even;
