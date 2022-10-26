function equalArrays(arr1, arr2) {
  let firstArr = arr1;
  let secondArr = arr2;
  let firstArrSum = 0;
  let diff = 0;
  let arrIdentical = true;

  for (let i = 0; i < firstArr.length; i++) {
    let currentNumFirstArr = Number(firstArr[i]);
    firstArrSum += currentNumFirstArr;
    if (firstArr[i] !== secondArr[i]) {
      diff = i;
      console.log(
        `Arrays are not identical. Found difference at ${diff} index`
      );
      arrIdentical = false;
      break;
    }
  }
  if (arrIdentical) {
    console.log(`Arrays are identical. Sum: ${firstArrSum}`);
  }
}
equalArrays(["1", "2", "3", "4", "6"], ["1", "2", "3", "4", "5", "6"]);
