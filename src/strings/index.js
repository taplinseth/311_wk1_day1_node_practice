const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str) => {
  return str.match(/.{2}/g);

}

const reverse = (str) => {
  let splitStr = str.split('');
  let reversedStr = splitStr.reverse();
  let newStr = reversedStr.join('');
  return newStr;

}

module.exports = {
  split,
  pairs,
  reverse
}