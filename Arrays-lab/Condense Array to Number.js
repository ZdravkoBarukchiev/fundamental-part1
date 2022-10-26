function condenseArrayToNumber(input) {
  let numbers = input;
  if (input.length == 1) {
    console.log(numbers[0]);
  } else {
    while (numbers.length > 1) {
      let condensed = [];
      let curentNum = 0;
      for (let i = 0; i < numbers.length - 1; i++) {
        curentNum = numbers[i] + numbers[i + 1];
        condensed.push(curentNum);
      }
      numbers = condensed;
      if (condensed.length <= 1) {
        console.log(condensed[0]);
      }
    }
  }
}
condenseArrayToNumber([5,5,5]);
