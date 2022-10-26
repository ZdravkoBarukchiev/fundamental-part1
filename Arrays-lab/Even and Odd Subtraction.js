function evenAndOddSubtraction(input) {
  let index = 0;
  let num = Number(input[index]);
  let eventSum = 0;
  let oddSum = 0;

  while (index < input.length) {
    if (num % 2 == 0) {
      eventSum += num;
    } else {
      oddSum += num;
    }
    index++;
    num = Number(input[index]);
  }
  let totalSum = eventSum - oddSum;
  console.log(totalSum);
}
evenAndOddSubtraction(["1", "2", "3", "4", "5", "6"]);
