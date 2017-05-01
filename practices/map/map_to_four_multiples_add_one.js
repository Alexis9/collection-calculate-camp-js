'use strict';
var map_to_four_multiples_add_one = function (collection) {

  for (var index in collection) {
    collection[index] = collection[index] * 4 + 1;
  }
  return collection;
};

module.exports = map_to_four_multiples_add_one;
