'use strict';
var number_map_to_word = function(collection){

  var data = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = new Array();

  for(var index in collection)
    result.push(data[collection[index]]);

  return result;
};

module.exports = number_map_to_word;
