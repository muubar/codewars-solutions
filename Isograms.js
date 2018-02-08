function isIsogram(str) {
  if (!str) return true;
  var strLowered = str.toLowerCase();
  for (let i = 0; i < str.length - 1; i++) {
    if (strLowered.slice(i + 1).includes(strLowered[i])) return false
  }
  return true;
}
//faster than indexOf === lastIndexOf