'use strict';
function rank_by_two_large_one_small(collection) {
  var littleIndex = 0;
  var littleNumber = 0;
  var littleElement = [];
  var upperElement = [];
  var result = [];

  collection.sort(function (a, b) {
    return a - b > 0 ? 1 : -1
  });

  for (var index = 0; index < collection.length; ++index) {
    if (index == littleIndex && littleElement.length < parseInt(collection.length / 3)) {
      littleElement.push(collection[index]);
      littleIndex += 3;
    } else {
      upperElement.push(collection[index]);
    }

  }

  littleIndex = 2
  for (var index = 0; index < upperElement.length; ++index) {
    if (index == littleIndex) {
      result.push(littleElement[littleNumber]);
      littleIndex += 2;
      ++littleNumber;
    }
    result.push(upperElement[index]);
  }

  return result;
}
module.exports = rank_by_two_large_one_small;
