'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  var result = 0;

  for (var index in collection) {
    result += collection[index] * 3 + 2;
  }

  return result;
}

module.exports = hybrid_operation;

