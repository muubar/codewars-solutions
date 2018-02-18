function digPow(n, p) {
  const arr = n.toString().split("");
  const leftSum = arr.reduce(function (acc, elem) {
    return acc + Math.pow(elem, p++);
  }, 0);
  const k = (leftSum / n);
  if (Number.isInteger(k) === true) { return k }
  else { return -1 }
}