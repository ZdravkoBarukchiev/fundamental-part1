function perfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num / i == Math.round(num / i)) {
      sum += i;
    }
  }
  if(sum==num){
    console.log("We have a perfect number!");
  }else{
    console.log("It's not so perfect.");
  }
}
perfectNumber(7)
