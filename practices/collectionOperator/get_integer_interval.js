'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = new Array();
  if(number_a > number_b) return decrease(number_a, number_b, result);
  if(number_a < number_b) return increasing(number_a, number_b, result);

  return [number_b];
}

// 根据给出的两个数字得到一个自增1的数字区间
function increasing(number_a, number_b, result) {
  for (var start = number_a; start <= number_b; ++start) {
    result.push(start)
  }

  return result;
}

//根据给出的两个数字得到一个自减1的数字区间
function decrease(number_a, number_b, result) {
  for (var end = number_a; end >= number_b; --end) {
    result.push(end);
  }

  return result;
}

module.exports = get_integer_interval;

