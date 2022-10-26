function solve(input) {
  let firstList = input.shift();
  let listOfCards = firstList.split(", ");
  let numOfCommand = Number(input.shift());
  let commandsLine = input;

  for (let i = 0; i < numOfCommand; i++) {
    let commandLine = commandsLine[i];
    let commandInfo = commandLine.split(", ");
    let command = commandInfo[0];
    switch (command) {
      case "Add":
        let addCard = commandInfo[1];
        if (listOfCards.includes(addCard)) {
          console.log("Card is already in the deck");
        } else {
          listOfCards.push(addCard);
          console.log("Card successfully added");
        }
        break;
      case "Remove":
        let removeCard = commandInfo[1];
        if (listOfCards.includes(removeCard)) {
          let index = listOfCards.indexOf(removeCard);
          listOfCards.splice(index, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
        break;
      case "Remove At":
        let removeIndex = commandInfo[1];
        if (removeIndex >= 0 && removeIndex < listOfCards.length) {
          listOfCards.splice(removeIndex, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;
      case "Insert":
        let insertIndex = commandInfo[1];
        let insertCard = commandInfo[2];
        if (insertIndex >= 0 && insertIndex < listOfCards.length) {
          if (listOfCards.includes(insertCard)) {
            console.log("Card is already added");
          } else {
            listOfCards.splice(insertIndex, 0, insertCard);
            console.log("Card successfully added");
          }
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }
  console.log(listOfCards.join(", "));
}

solve([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);
