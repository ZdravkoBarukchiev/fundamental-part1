function amazingNumbers(input) {
  let numString = String(input);
  let sum = 0;

  for (let i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }
  let result = String(sum).includes("9");
  if (result) {
    console.log(`${numString} Amazing? True`);
  } else {
    console.log(`${numString} Amazing? False`);
  }
}
amazingNumbers(1232);
