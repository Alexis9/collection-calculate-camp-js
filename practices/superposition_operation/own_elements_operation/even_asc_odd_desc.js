'use strict';
var even_asc_odd_desc = function(collection){
  var even = [];
  var odd = [];

  for(var index in collection) {
    collection[index] % 2 == 0 ? even.push(collection[index]) : odd.push(collection[index]);
  }

  even.sort(function (a,b) {return a-b>0?1:-1});
  odd.sort(function (a,b) {return a-b<0?1:-1});

  return even.concat(odd);
};
module.exports = even_asc_odd_desc;
