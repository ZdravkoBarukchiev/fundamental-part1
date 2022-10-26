function processOddNumbers(arr) {
  let array = arr;
  let oddArr = [];

  for (el of array) {
    if (el % 2 != 0) {
      oddArr.push(el * 2);
    }
  }
  let result = oddArr.reverse().join(" ");
  console.log(result);
}
processOddNumbers([10, 15, 20, 25]);
