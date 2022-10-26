function oddAndEvenSum(num) {
  let number = num;
  const oddSum = (n) => {
    let sum = 0;
    let stringNum = String(n);
    let stringL = stringNum.length;
    for (let i = 0; i < stringL; i++) {
      let numElement = Number(stringNum[i]);
      if (numElement % 2 != 0) {
        sum += numElement;
      }
    }
    return sum;
  };
  let oddResult = oddSum(number);
  const evenSum = (n) => {
    let sum = 0;
    let stringNum = String(n);
    let stringL = stringNum.length;
    for (let i = 0; i < stringL; i++) {
      let numElement = Number(stringNum[i]);
      if (numElement % 2 == 0) {
        sum += numElement;
      }
    }
    return sum;
  };
  let evenResult = evenSum(number);

  return (`Odd sum = ${oddResult}, Even sum = ${evenResult}`)
}

console.log(oddAndEvenSum(1000435));
