function tseamAccount(input) {
  let arr = input;
  let accountArr = arr.shift().split(" ");
  let index = 0;
  let token = arr[index];
  while (token !== "Play!") {
    let tokenArr = token.split(" ");
    let command = tokenArr[0];
    let game = tokenArr[1];
    switch (command) {
      case "Install":
        if (!accountArr.includes(game)) {
          accountArr.push(game);
        }
        break;
      case "Uninstall":
        if (accountArr.includes(game)) {
          let gameIndex = accountArr.indexOf(game);
          accountArr.splice(gameIndex, 1);
        }
        break;
      case "Update":
        if (accountArr.includes(game)) {
          let gameIndex = accountArr.indexOf(game);
          let updateGame = accountArr.splice(gameIndex, 1).join("");
          accountArr.push(updateGame);
        }
        break;
      case "Expansion":
        let expArr = game.split("-");
        let exp = `${expArr[0]}:${expArr[1]}`;
        if (accountArr.includes(expArr[0])) {
          let gameIndex = accountArr.indexOf(expArr[0]) + 1;
          accountArr.splice(gameIndex, 0, exp);
        }
        break;
    }
    index++;
    token = arr[index];
  }
  console.log(accountArr.join(" "));
}
tseamAccount([
  "CS WoW Diablo",

  "Install LoL",

  "Uninstall WoW",

  "Update Diablo",

  "Expansion CS-Go",

  "Play!",
]);
