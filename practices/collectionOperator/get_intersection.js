'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array();

  for (var index in collection_b) {
    if (isExist(collection_b[index], collection_a)) result.push(collection_b[index]);
  }

  return result;
}

function isExist(elementB, collection_a) {
  for (var index in collection_a) {
    if (collection_a[index] === elementB) return true;
  }

  return false;
}
module.exports = get_intersection;
