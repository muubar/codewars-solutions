function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length === 0 || k <= 0) return "";
  var result = "";
  for (let i = 0; i + k <= strarr.length; i++) {
    result = strarr.slice(i, i + k).join("").length > result.length ? strarr.slice(i, i + k).join("") : result;
  }
  return result;
}