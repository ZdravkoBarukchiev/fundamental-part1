function maxNumber(arr) {
  let array = arr;
  let topArr = [];
  let arrLength = array.length;
  let currentNum;
  for (let i = 0; i < arrLength; i++) {
    let topNum = true;
    currentNum = array[i];
    for (let j = i + 1; j < arrLength; j++) {
      let secondCurrentNum = array[j];
      if (currentNum <= secondCurrentNum) {
        topNum = false;
        break;
      }
    }
    if (topNum) {
      topArr.push(currentNum);
    }
  }
  console.log(topArr.join(" "));
}
maxNumber([41, 41, 34, 20]);
