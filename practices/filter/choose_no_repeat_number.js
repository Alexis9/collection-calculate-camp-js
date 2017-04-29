'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result = new Array();

  for(var index in collection) {
    if(!hasContains(collection[index],result)) result.push(collection[index]);
  }

  return result;
}

function hasContains(element,array) {
  for(var index in array) {
    if(array[index] == element) return true;
  }

  return false;
}
module.exports = choose_no_repeat_number;
