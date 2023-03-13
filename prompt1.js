function replaceSpaces(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
//Recursion
function replaceSpaces(str) {
  if (str.length === 0) {
    return '';
  }
  if (str[0] === ' ') {
    return '%20' + replaceSpaces(str.slice(1));
  } else {
    return str[0] + replaceSpaces(str.slice(1));
  }
}