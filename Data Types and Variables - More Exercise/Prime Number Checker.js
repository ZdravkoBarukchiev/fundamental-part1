function primeNumberChecker(num) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num / i == Math.round(num / i) || num == 1) {
      prime = false;
      break;
    }
  }
  console.log(prime);
}
primeNumberChecker(81);
