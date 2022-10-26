function listOfProducts(arr) {
  let array = arr;
  let arrayL = array.length;
  array.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let i = 1; i <= arrayL; i++) {
    let el=array[i-1]
    console.log(`${i}.${el}`);
  }
}
listOfProducts(["Watermelon", "Banana", "Apples"]);
