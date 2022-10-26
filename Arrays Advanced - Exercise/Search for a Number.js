function searchForANumber(firstArr, secondArr) {
  let result = [];
  for (let i = 0; i < secondArr[0]; i++) {
    result.push(firstArr.shift());
  }
  for (let i = 0; i < secondArr[1]; i++) {
    result.shift();
  }
  let resArr = result.filter((num) => num == secondArr[2]);
  console.log(`Number ${secondArr[2]} occurs ${resArr.length} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
