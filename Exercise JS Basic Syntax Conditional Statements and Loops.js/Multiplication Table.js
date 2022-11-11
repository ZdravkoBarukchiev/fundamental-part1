function multiplicationTable(num){
  let n=num;
  let result=0;

  for(let i=1;i<=10;i++){
      result=i*n;
      console.log(`${n} X ${i} = ${result}`);
  }
}multiplicationTable(5)