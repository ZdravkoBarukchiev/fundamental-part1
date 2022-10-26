function printNthElement(input) {
  let arr = input;
  let nEl = Number(arr.pop());
  let arrL = arr.length;
  let result = [];
  for (let i = 0; i < arrL; i += nEl) {
    result.push(arr[i]);
  }
  console.log(result.join(' '));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
