function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  var numCopy = numbers.slice();
  var smallestIdx = 0;
  var smallestValue = numCopy[0]
  numCopy.forEach(function (elem, i) {
    if (elem < smallestValue) {
      smallestValue = elem;
      smallestIdx = i;
    }
  })
  numCopy.splice(smallestIdx, 1);
  return numCopy;
}