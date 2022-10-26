function charactersInRange(fChar, sChar) {
  let numFirstChar = fChar.charCodeAt(0);
  let numSecondChar = sChar.charCodeAt(0);
  let maxNumChar = Math.max(numFirstChar, numSecondChar);
  let minNumChar = Math.min(numFirstChar, numSecondChar);
  let arrMidChar=[];

  for (let i = minNumChar + 1; i < maxNumChar; i++) {
    let midleChar=String.fromCharCode(i);
     arrMidChar.push(midleChar);
  }
  console.log(arrMidChar.join(' '));
}
charactersInRange("a", "d");
