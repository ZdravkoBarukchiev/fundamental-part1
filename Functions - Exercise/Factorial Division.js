function factorialDivision(a, b) {
  resA = 1;
  resB = 1;
  for (let i = 1; i <= a; i++) {
    resA *= i;
  }
  for (let i = 1; i <= b; i++) {
    resB *= i;
  }
  let result = (resA / resB).toFixed(2);
  console.log(result);
}
factorialDivision(5, 2);
