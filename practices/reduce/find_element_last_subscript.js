'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  collection = collection.reverse();

  for (var index in collection) {
    if (collection[index] === element) return collection.length - 1 - parseInt(index);
  }
}

module.exports = calculate_elements_sum;
