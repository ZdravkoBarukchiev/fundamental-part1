function houseParty(list) {
  let guestsArr = [];
  for (el of list) {
    let infoArr = el.split(" ");
    let name = infoArr[0];
    if (guestsArr.includes(name) && infoArr.length == 3) {
      console.log(`${name} is already in the list!`);
    } else if (infoArr.length == 3) {
      guestsArr.push(name);
    }
    if (infoArr.length == 4 && guestsArr.includes(name)) {
      let index = guestsArr.indexOf(name);
      guestsArr.splice(index, 1);
    } else if (infoArr.length == 4) {
      console.log(`${name} is not in the list!`);
    }
  }
  guestsArr.forEach((x) => console.log(x));
}
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
