function sortNumbers(a, b, c) {
  let num1 = a;
  let num2 = b;
  let num3 = c;

  let bigNum = 0;
  let middleNum = 0;
  let lowNum = 0;

  if (num1 >= num2 && num2 >= num3) {
    bigNum = num1;
    middleNum = num2;
    lowNum = num3;
  } else if (num1 >= num3 && num3 >= num2) {
    bigNum = num1;
    middleNum = num3;
    lowNum = num2;
  } else if (num2 >= num1 && num1 >= num3) {
    bigNum = num2;
    middleNum = num1;
    lowNum = num3;
  } else if (num2 >= num3 && num3 >= num1) {
    bigNum = num2;
    middleNum = num3;
    lowNum = num1;
  } else if (num3 >= num2 && num2 >= num1) {
    bigNum = num3;
    middleNum = num2;
    lowNum = num1;
  } else if (num3 >= num1 && num1 >= num2) {
    bigNum = num3;
    middleNum = num1;
    lowNum = num2;
  }
  console.log(bigNum);
  console.log(middleNum);
  console.log(lowNum);
}
sortNumbers(2,-5,0)