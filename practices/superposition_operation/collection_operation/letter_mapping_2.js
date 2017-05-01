'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var result = 0;
  var data = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (var index in collection) {
    result += collection[index];
  }

  return data[result % collection.length == 0 ? result / collection.length : parseInt(result / collection.length) + 1];
}

module.exports = average_to_letter;

