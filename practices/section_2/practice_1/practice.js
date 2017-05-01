function count_same_elements(collection) {
  //在这里写入代码
  var result = new Array();

  for(var index in collection) {
    result = isExist(collection[index], result);
  }

  return result;
}

function isExist(element,result) {
  for(var index in  result) {
    if((result[index])["key"] == element){
      (result[index])["count"] += 1;

      return result;
    }
  }
  result.push({key: element, count: 1});

  return result;
}

module.exports = count_same_elements;
