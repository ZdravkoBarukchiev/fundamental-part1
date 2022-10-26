function numberModification(input) {
  let stringNum = String(input);
  let arr = [];
  let sum = 0;
  for (let i = 0; i < stringNum.length; i++) {
    sum += Number(stringNum[i]);
    arr.push(stringNum[i]);
  }
  while (sum / arr.length <= 5) {
    arr.push("9");
    sum += 9;
  }
  console.log(arr.join(''));
}
numberModification(101);
