function NxNMatrix(n) {
  let number = n;
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(number);
  }
  let row = arr.join(" ");
  for (let j = 0; j < number; j++) {
    console.log(row);
  }
}
NxNMatrix(5);
