function distinctArray(arr) {
  let array = arr;
  let newArray = [];
  for (el of array) {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }
  console.log(newArray.join(" "));
}
distinctArray([
  7, 8, 9, 7, 2, 3,

  4, 1, 2,
]);
