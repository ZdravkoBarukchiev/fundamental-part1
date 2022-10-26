function arrayManipulations(arr) {
  let array = arr;
  let arrNum = array.shift().split(" ");
  arrNum.map((el) => {
    Number(el);
  });
  for (let i = 0; i < array.length; i++) {
    let [command, firstNum, secondNum] = array[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        arrNum.push(firstNum);
        break;
      case "Remove":
        arrNum.filter((el) => {
          if (el !== firstNum) {
            return el;
          }
        });
        break;
      case "RemoveAt":
        arrNum.splice(firstNum, 1);
        break;
      case "Insert":
        arrNum.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(arrNum.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]);
