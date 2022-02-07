const isEven = (num) => {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }

}

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const comboSum = (arr, sum) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total === sum) {
    return true;
  } else {
    return false;
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}