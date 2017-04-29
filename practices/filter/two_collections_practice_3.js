'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array();

  for (var index in collection_a) {
    result = isExist(collection_a[index], collection_b, result)
  }

  return result;
}

function isExist(elementA, collection_b, result) {

  for (var index in collection_b) {
    if (elementA % collection_b[index] == 0) result.push(elementA);
  }

  return result;
}
module.exports = choose_divisible_integer;
