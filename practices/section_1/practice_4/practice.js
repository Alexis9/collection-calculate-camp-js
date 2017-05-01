function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = new Array();
  var collection_b = object_b.value;

  for (var index in collection_a) {
    if (isExist((collection_a[index]).key, collection_b))
      result.push((collection_a[index]).key);
  }

  return result;
}

function isExist(element_a, collection_b) {
  for (var index in collection_b) {
    if (collection_b[index] === element_a) return true;
  }
}
module.exports = collect_same_elements;
