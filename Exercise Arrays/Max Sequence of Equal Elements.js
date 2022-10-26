function maxSequenceOfequalElements(arr) {
  let array = arr;
  let arrLength = array.length;
  let firstNewArr = [];
  let secondNewArr = [];

  for (let i = 0; i < arrLength; i++) {
    firstNewArr = [];
    for (let j = i; j < arrLength; j++) {
      if (array[i] == array[j]) {
        firstNewArr.push(array[i]);
      } else {
        break;
      }
    }
    if (firstNewArr.length > secondNewArr.length) {
      secondNewArr = firstNewArr;
    }
  }
  console.log(secondNewArr.join(" "));
}
maxSequenceOfequalElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
