function reverseAnArrayOfNumbers(n, arr) {
  let newArr = [];

  for (let i = n-1; i >= 0; i--) {
    let element = arr[i];
    newArr.push(element);
  }
  let printLine = "";
  for (let a = 0; a < newArr.length; a++) {
    printLine += newArr[a]+' ';
  }
  console.log(printLine);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
