function bombNumbers(sequence, bombInfo) {
  let bombNum = bombInfo[0];
  let power = bombInfo[1];
  let index = 0;
  while (index != -1) {
    index = sequence.indexOf(bombNum);
    sequence.splice(index, power + 1);
    sequence.splice(index - power, power);
    index = sequence.indexOf(bombNum);
  }
  console.log(sequence.reduce((acc, x) => acc + x, 0));
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
