function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var index in collection_a) {
    if (isExist(collection_a[index].key, object_b.value)) collection_a[index].count -= parseInt(collection_a[index].count / 3);
  }

  return collection_a;
}

function isExist(element_a, array_b) {
  for (var index in array_b) {
    if (element_a == array_b[index]) return true;
  }
}
module.exports = create_updated_collection;
