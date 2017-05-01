'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for (var index in collection) {
    if(collection[index] === element) return parseInt(index);
  }
}

module.exports = calculate_elements_sum;

