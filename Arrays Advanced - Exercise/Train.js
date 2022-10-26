function train(arr) {
  let array = arr;
  let wagonsWithPassengers = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());
  for (el of array) {
    let command = el.split(" ");
    if (command[0] == "Add") {
      wagonsWithPassengers.push(Number(command[1]));
    } else {
      let morePasseners = Number(command[0]);
      for (let i = 0; i < wagonsWithPassengers.length; i++) {
        if (wagonsWithPassengers[i] + morePasseners <= maxCapacity) {
          wagonsWithPassengers[i] += morePasseners;
          break;
        }
      }
    }
  }
  console.log(wagonsWithPassengers.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
