'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var all_even = new Array();

  for(var index in collection) {
    if(collection[index] % 2 === 0) {
      all_even.push(collection[index]);
    }
  }

  return all_even
}

module.exports = collect_all_even;
