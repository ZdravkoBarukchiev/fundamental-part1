function dungeonestDark(arr) {
  let array = arr;
  let count = 0;
  let command = array[0].split("|");
  let health = 100;
  let coins = 0;
  for (el of command) {
    let currentCommand = el.split(" ");
    count++;
    switch (currentCommand[0]) {
      case "potion":
        health += Number(currentCommand[1]);
        if (health >= 100) {
          let diff = health - 100;
          health = 100;
          console.log(`You healed for ${currentCommand[1] - diff} hp.`);
        } else {
          console.log(`You healed for ${currentCommand[1]} hp.`);
        }
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        coins += Number(currentCommand[1]);
        console.log(`You found ${currentCommand[1]} coins.`);
        break;
      default:
        health -= Number(currentCommand[1]);
        if (health > 0) {
          console.log(`You slayed ${currentCommand[0]}.`);
        }
        break;
    }
    if (health <= 0) {
      console.log(`You died! Killed by ${currentCommand[0]}.`);
      break;
    }
  }
  if (count >= command.length) {
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
  } else {
    console.log(`Best room: ${count}`);
  }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
