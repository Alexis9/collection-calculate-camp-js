'use strict';

function median_to_letter(collection) {
  var data = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  collection.sort(function (a, b) {
    return a > b ? 1 : -1
  })
  var medium = Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2);

  return medium > 26 ? (data[parseInt(medium / 26)] + data[parseInt(medium % 26)]) : data[medium];
}

module.exports = median_to_letter;
