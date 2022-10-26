function equalNeighbors(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    let row = input[i];
    let nextRow = input[i + 1];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === row[j + 1]) {
        counter++;
      }
      if (row[j] === (nextRow ? nextRow[j] : "")) {
        counter++;
      }
    }
  }
  return counter;
}
equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
