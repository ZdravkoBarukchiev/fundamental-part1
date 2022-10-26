function arrayRotation(arr, numRotation) {
  let array = arr;
  let rotation = numRotation;

  for (let i = 0; i < rotation; i++) {
    let numToMove = array.shift();
    array.push(numToMove);
  }
  console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
