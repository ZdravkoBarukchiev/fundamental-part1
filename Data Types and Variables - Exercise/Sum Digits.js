function sumDigits(input) {
  let stringNum = String(input);
  let sum = 0;
  for (let i = 0; i < stringNum.length; i++) {
    let char = stringNum[i];
    let digit = Number(char);
    sum += digit;
  }
  console.log(sum);
}
sumDigits(245678);
