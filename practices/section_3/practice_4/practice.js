function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = new Array();

  for (var index in collection_a) {
    result = isSame(collection_a[index], result);
  }
  for (var index in result) {
    if (isExist(result[index].key, object_b.value)) result[index].count -= parseInt(result[index].count / 3);
  }
  return result;
}

function isSame(element, result) {
  var key_and_count = element.split("-");
  var key = key_and_count.length == 1 ? element : key_and_count[0];
  var count = key_and_count.length == 1 ? 1 : key_and_count[1];

  for (var index in  result) {
    if ((result[index])["key"] == key) {
      (result[index])["count"] += parseInt(count);

      return result;
    }
  }
  result.push({key: key, count: parseInt(count)});

  return result;
}

function isExist(element_a, array_b) {
  for (var index in array_b) {
    if (element_a == array_b[index]) return true;
  }
}
module.exports = create_updated_collection;
