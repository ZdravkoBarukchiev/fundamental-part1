function addAndSubtract(arr) {
  let firstArray = arr;
  let arrLength = firstArray.length;
  let secondArray = [];
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < arrLength; i++) {
    let num = Number(firstArray[i]);
    firstSum += num;
    let newNum = 0;
    if (num % 2 == 0) {
      newNum = num + i;
    } else {
      newNum = num - i;
    }
    secondArray.push(newNum);
    secondSum += newNum;
  }
  console.log(secondArray);
  console.log(firstSum);
  console.log(secondSum);
}
addAndSubtract([-5, 11, 3, 0, 2]);
