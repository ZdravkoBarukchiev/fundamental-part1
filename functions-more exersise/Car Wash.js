function carWash(input) {
  let value = 10;

  for (let i = 1; i < input.length; i++) {
    el = input[i];
    switch (el) {
      case "soap":
        value += 10;
        break;
      case "water":
        value = value * 1.2;
        break;
      case "vacuum cleaner":
        value = value * 1.25;
        break;
      case "mud":
        value = value * 0.9;
        break;
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
