'use strict';
var number_map_to_word_over_26 = function (collection) {

  var result = new Array();
  var data = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (var index in collection) {
    var cell = parseInt(collection[index] / 26);
    if (cell > 0) {
      result.push(data[cell] + data[collection[index] % 26]);
      continue;
    }
    result.push(data[collection[index]]);
  }

  return result;
};

module.exports = number_map_to_word_over_26;
