function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = new Array();

  for(var index in collection_a) {
    result = isSame(collection_a[index], result);
  }
  for (var index in result) {
    if (isExist(result[index].key, object_b.value)) result[index].count -= parseInt(result[index].count / 3);
  }
  return result;
}

function isSame(element,result) {
  for(var index in  result) {
    if((result[index])["key"] == element){
      (result[index])["count"] += 1;

      return result;
    }
  }
  result.push({key: element, count: 1});

  return result;
}

function isExist(element_a, array_b) {
  for (var index in array_b) {
    if (element_a == array_b[index]) return true;
  }
}
module.exports = create_updated_collection;
