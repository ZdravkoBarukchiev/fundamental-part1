function magicMatrices(input) {
  let magic = true;
  for (el of input) {
    let rowSum = el.reduce((acc, num) => acc + num);
    let colSum = 0;
    for (let i = 0; i < el.length; i++) {
      colSum += input[i][1];
    }
    if (rowSum != colSum) {
      magic = false;
      break;
    }
  }
  console.log(magic);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
