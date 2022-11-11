function printAndSum(n1, n2) {
  let startNum = n1;
  let endNum = n2;
  let sum = 0;
  let printLine = "";

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    printLine += i+' ';
  }
  console.log(`${printLine}`);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
