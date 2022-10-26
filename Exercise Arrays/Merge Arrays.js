function mergeArrays(arr1, arr2) {
  let firstArray = arr1;
  let secondArray = arr2;
  let thirdArray = [];
  let arrLength = firstArray.length;

  for (let i = 0; i < arrLength; i++) {
    let newElement;
    let firstNum = Number(firstArray[i]);
    let secondNum = Number(secondArray[i]);
    if (i % 2 == 0) {
      newElement = firstNum + secondNum;
    } else {
      newElement = firstArray[i] + secondArray[i];
    }
    thirdArray.push(newElement);
  }
  console.log(thirdArray.join(" - "));
}
mergeArrays(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);
