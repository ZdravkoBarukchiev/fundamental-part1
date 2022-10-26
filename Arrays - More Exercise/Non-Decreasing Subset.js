function nonDecreasingSubset(input) {
  let arr = input;
  let arrL = arr.length;
  let newArr = [];
  newArr.push(arr[0]);
  for (let i = 0; i < arrL; i++) {
    let currNum = arr[i];
    let nextNum = arr[i + 1];
    if (nextNum >= currNum) {
      newArr.push(nextNum);
    }
  }
  console.log(newArr.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
