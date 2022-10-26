function smallestTwoNumbers(arr) {
  let array = arr;
  let numbers = (a) => {
    let minNum = Number.MAX_SAFE_INTEGER;
    for (el of array) {
      if (el < minNum) {
        minNum = el;
      }
    }
    return minNum;
  };
  let minimalNum = numbers(array);
  array.splice(array.indexOf(minimalNum), 1);
  let secondMinimalNum = numbers(array);
  let newArr = [];
  newArr.push(minimalNum, secondMinimalNum);
  console.log(newArr.join(" "));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
