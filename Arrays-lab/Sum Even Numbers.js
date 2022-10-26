function sumEvenNumbers(input) {
  let index = 0;
  let num = Number(input[index]);
  let sum = 0;

  while (index < input.length) {
    if (num % 2 == 0) {
      sum += num;
    }
    index++;
    num = Number(input[index]);
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
