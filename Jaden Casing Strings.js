String.prototype.toJadenCase = function () {
  var str = this;
  var result = str.toLowerCase()
    .split(" ")
    .map(function (elem) {
      if (!elem) return "";
      else return elem[0].toUpperCase() + elem.substring(1);
    })
    .join(" ");
  return (result);
};