function solve(input) {
  let bisqitsADay = Number(input[0]);
  let workers = Number(input[1]);
  let competingFaktoryProd = Number(input[2]);
  let counter = 0;

  for (let i = 1; i <= 30; i++) {
    let dayProdukt = workers * bisqitsADay;
    if (i % 3 == 0) {
      dayProdukt = Math.floor(dayProdukt * 0.75);
    }
    counter += dayProdukt;
  }
  console.log(`You have produced ${counter} biscuits for the past month.`);
  let percent = 0;
  if (counter > competingFaktoryProd) {
    let diff = counter - competingFaktoryProd;
    percent = (diff / competingFaktoryProd) * 100;
    console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
  } else {
    let diff = competingFaktoryProd - counter;
    percent = (diff / competingFaktoryProd) * 100;
    console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
  }
}
solve(["65", "12", "26000"]);
