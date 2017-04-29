'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var data = {};
  var result = new Array();
  var temp = [].concat.apply([], collection);

  for (var index in temp) {
    if (!data[temp[index]]) {
      data[temp[index]] = 1;
      result.push(temp[index]);
    }
  }

  return result;
}

module.exports = double_to_one;
