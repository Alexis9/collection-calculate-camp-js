'use strict';

function find_first_even(collection) {
  //在这里写入代码

  for (var index in collection) {
    if (collection[index] % 2 === 0) return collection[index];
  }
}

module.exports = find_first_even;

