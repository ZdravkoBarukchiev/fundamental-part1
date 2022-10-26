function negativeOrPositiveNumbers(arr) {
  let array = arr;
  let arrayL = array.length;
  let newArray = [];

  for (let i = 0; i < arrayL; i++) {
    let element = Number(array[i]);
    if (element < 0) {
      newArray.unshift(element);
    } else {
      newArray.push(element);
    }
  }
  for (let j = 0; j < arrayL; j++) {
    let newElement = newArray[j];
    console.log(newElement);
  }
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
