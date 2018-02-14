function inArray(array1, array2) {
  var result = array1.filter(function (elem) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(elem)) return true;
    }
    return false;
  }
  ).sort();
  return result;
}