'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (var index in collection_b) {
    if(isExist(collection_b[index],collection_a)) collection_a.push(collection_b[index]);
  }

  return collection_a
}

function isExist(elementA, collection_b) {

  for (var index in collection_b) {
    if (collection_b[index] === elementA) return false;
  }

  return true;
}
module.exports = get_union;
