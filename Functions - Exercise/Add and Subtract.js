function addAndSubtract(fNum, sNum, tNum) {
  function sum(numOne, numTwo) {
    let result = numOne + numTwo;
    return result;
  }

  let sumOfFirstTwoNum = sum(fNum, sNum);

  function subtract(sum, thirdNum) {
    let result = sum - thirdNum;
    return result;
  }
  let finalResult = subtract(sumOfFirstTwoNum, tNum);
  console.log(finalResult);
}
addAndSubtract(1, 2, 1);
