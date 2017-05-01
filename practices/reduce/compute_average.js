'use strict';

function compute_average(collection) {
  //在这里写入代码

  var result = 0;

  for (var index in collection) {
    result += collection[index];
  }

  return result / collection.length;
}

module.exports = compute_average;

