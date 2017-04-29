'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码

  var result = new Array();

  if (number_a < number_b) return increasing(number_a, number_b, result);
  if (number_a > number_b) return decrease(number_a, number_b, result);
  if (number_b == number_a) return isSame(number_a, number_b);

}

//给定两个相同的偶数得到只含此数字的数组
function isSame(number_a, number_b) {
  if (number_a % 2 == 0 && number_b % 2 == 0) {

    return [number_b];
  }

  return [];
}

// 根据给出的两个数字得到自增的偶数区间
function increasing(number_a, number_b, result) {
  for (var start = number_a; start <= number_b; ++start) {
    if (start % 2 == 0) {
      result.push(start)
    }
  }

  return result;
}

//根据给出的两个数字得到自减的偶数区间
function decrease(number_a, number_b, result) {
  for (var end = number_a; end >= number_b; --end) {
    if (end % 2 == 0) {
      result.push(end);
    }
  }

  return result;
}
module.exports = get_integer_interval_2;
