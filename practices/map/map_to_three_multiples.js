'use strict';
var map_to_three_multiples = function (collections) {

  for (var index in collections) {
    collections[index] *= 3;
  }

  return collections;
};

module.exports = map_to_three_multiples;
