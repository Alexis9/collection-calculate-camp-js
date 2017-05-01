'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = new Array();
  var index = number * 10;
  interval *= 10;

  result.push(number);
  while (index > interval) {
    result.push((index - interval) / 10);
    index -= interval;
  }
  if (number % interval == 0) return result;

  result.push((index - interval) / 10);

  return result
}

module.exports = spilt_to_zero;
