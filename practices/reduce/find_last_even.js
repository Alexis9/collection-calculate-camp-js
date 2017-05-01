'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection = collection.reverse();

  for (var index in collection) {
    if (collection[index] % 2 == 0) return collection[index];
  }

}

module.exports = find_last_even;
