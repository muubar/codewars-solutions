function findEvenIndex(arr) {
  var leftSum = 0;
  var rightSum = arr.reduce((acc, elem) => acc + elem);
  if (rightSum === 0) return 0;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1]) leftSum += arr[i - 1];
      rightSum -= arr[i];
      if (leftSum === rightSum) return i;
    }
  }
  return -1;
}