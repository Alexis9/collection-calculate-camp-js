function count_same_elements(collection) {
  //在这里写入代码
  var result = new Array();

  for(var index in collection) {
    result = isExist(collection[index], result);
  }

  return result;
}

function isExist(element,result) {
  var key_and_count = getKeyAndCount(element);

  for(var index in  result) {
    if((result[index])["name"] == key_and_count[0]){
      (result[index])["summary"] += parseInt(key_and_count[1]);

      return result;
    }
  }
  result.push({name: key_and_count[0], summary: parseInt(key_and_count[1])});

  return result;
}

function getKeyAndCount(element) {
  var key_and_count = [element,1];

  if(element.split("-").length > 1){
    key_and_count[0] = element.split("-")[0];
    key_and_count[1] = element.split("-")[1];
  }else if(element.split(":").length > 1){
    key_and_count[0] = element.split(":")[0];
    key_and_count[1] = element.split(":")[1];
  }else if(element.split("[").length > 1){
    key_and_count[0] = element.split("[")[0];
    key_and_count[1] = element.split("[")[1].split("]")[0];
  }

  return key_and_count;
}
module.exports = count_same_elements;
