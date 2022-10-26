function triplesOfLatinLetters(input) {
  let num = Number(input);

  for (let a = 0; a < num; a++) {
    for (let b = 0; b < num; b++) {
      for (let c = 0; c < num; c++) {
        let letter = String.fromCharCode(97 + num);
        console.log(letter);
      }
    }
  }
}
triplesOfLatinLetters('3')