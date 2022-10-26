function blackFlag(input) {
  let days = Number(input[0]);
  let dailyPlunder = Number(input[1]);
  let expectedPlunder = Number(input[2]);
  let counter = 0;

  for (let i = 1; i <= days; i++) {
    counter += dailyPlunder;
    if (i % 3 == 0) {
      counter += dailyPlunder / 2;
    }
    if (i % 5 == 0) {
      counter = counter * 0.7;
    }
  }
  let percent = (counter / expectedPlunder) * 100;
  if (counter >= expectedPlunder) {
    console.log(`Ahoy! ${counter.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
