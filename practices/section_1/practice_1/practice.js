function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array();

  for (var index in collection_a) {
    if (isExist(collection_a[index], collection_b))
      result.push(collection_a[index]);
  }

  return result;
}

function isExist(element_a, collection_b) {
  for (var index in collection_b) {
    if (collection_b[index] === element_a) return true;
  }
}
module.exports = collect_same_elements;
