function rotateArray(input) {
  let arr = input;
  let numOfRotation = Number(arr.pop());
  for (let i = 0; i < numOfRotation; i++) {
    let elForRemove = arr.pop();
    arr.unshift(elForRemove);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
