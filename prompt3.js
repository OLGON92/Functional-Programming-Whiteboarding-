function compressString(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      result += count + str[i];
      count = 1;
    }
  }
  return result;
}
//Recursion
function compressString(str) {
  if (str === "") {
    return "";
  }
  let count = 1;
  while (str[count] === str[0]) {
    count++;
  }
  return count + str[0] + compressString(str.slice(count));
}