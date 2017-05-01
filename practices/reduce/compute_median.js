'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection = collection.sort();

  if (collection.length % 2 != 0) return collection[parseInt(collection.length / 2)];
  if (collection.length <= 4) return (collection[collection.length / 2 - 1] + collection[collection.length / 2] ) / 2;

  return (collection[collection.length / 2 - 1] + collection[collection.length / 2] - 2) / 2 - 2;
}

module.exports = compute_median;


