function commonElements(arr1, arr2) {
  let firstArray = arr1;
  let secondArray = arr2;

  let arrLength = arr1.length;

  for (let i = 0; i < arrLength; i++) {
    let firstElement = firstArray[i];
    if (secondArray.includes(firstElement)) {
      console.log(firstElement);
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
