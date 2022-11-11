function rounding(num1,num2){
 let number=num1;
 let precision=num2;

 if(precision>15){
     precision=15;
 }

 let result=number.toFixed(precision);

 console.log(parseFloat(result));
}rounding(3.123456789112345678,21);