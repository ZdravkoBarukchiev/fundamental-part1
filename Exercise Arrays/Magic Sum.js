function magicSum(arr, num) {
  let array = arr;
  let number = num;
  let arrLength = array.length;
  let newArr = [];
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      newArr = [];
      if (array[i] + array[j] == number) {
        newArr.push(array[i]);
        newArr.push(array[j]);
        console.log(newArr.join(" "));
      }
    }
  }
}
magicSum(
  [1, 7, 6, 2, 19, 23],

  8
);
