'use strict';

function compute_chain_median(collection) {
  //在这里写入代码

  collection = collection.split("->").sort(sortNumber);

  return collection.length % 2 == 0 ? (collection[collection.length / 2 - 1] / 2+collection[collection.length / 2] / 2) : collection[collection.length / 2 + 1];
}
function sortNumber(a,b)
{
  return a - b
}
module.exports = compute_chain_median;
