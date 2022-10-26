function Sorting(arr) {
  let array = arr;
  let newArr = [];
  let sortedArray = array.sort((a, b) => {
    return b - a;
  });
  let sortedArrL=sortedArray.length;
  for (let i = 0; i < sortedArrL; i++) {
    let bigEl = sortedArray.shift();
    let smallEl = sortedArray.pop();
    newArr.push(bigEl);
    newArr.push(smallEl);
  }
  console.log(newArr.join(" "));
}
Sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
