function count_same_elements(collection) {
  //在这里写入代码
  var result = new Array();

  for(var index in collection) {
    result = isExist(collection[index], result);
  }

  return result;
}

function isExist(element,result) {
  var key_and_count = element.split("-");
  var key = key_and_count.length == 1 ? element :key_and_count[0];
  var count = key_and_count.length == 1 ? 1 :key_and_count[1];

  for(var index in  result) {
    if((result[index])["key"] == key){
      (result[index])["count"] += parseInt(count);

      return result;
    }
  }
  result.push({key: key, count: parseInt(count)});

  return result;
}
module.exports = count_same_elements;
