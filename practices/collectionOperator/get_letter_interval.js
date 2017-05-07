'use strict';
var data = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function get_letter_interval(number_a, number_b) {
  var result = new Array();

  if(number_a > number_b) return decrease(number_a, number_b, result);
  if(number_a < number_b) return increasing(number_a, number_b, result);

  return [data[number_b]];
}

// 根据给出的两个数字得到一个自增1的数字区间
function increasing(number_a, number_b, result) {
  for (var start = number_a; start <= number_b; ++start) {
    result.push(data[start])
  }

  return result;
}

//根据给出的两个数字得到一个自减1的数字区间
function decrease(number_a, number_b, result) {
  for (var end = number_a; end >= number_b; --end) {
    result.push(data[end]);
  }

  return result;
}
module.exports = get_letter_interval;
