'use strict';
var calculate_median = function (collection) {
  var data = [];

  for (var index in collection) {
    if (collection[index] % 2 === 0) {
      data.push(collection[index]);
    }
  }

  return data.length % 2 === 0 ? (data[data.length / 2 - 1] / 2 + data[data.length / 2] / 2) : data[parseInt(data.length / 2 )];

};
module.exports = calculate_median;
