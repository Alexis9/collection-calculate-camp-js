'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var result = 0;

  for (var index in collection) {
    result += collection[index];
  }

  return result;
}

module.exports = calculate_elements_sum;

