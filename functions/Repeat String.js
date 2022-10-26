function repeatString(string, num) {
  let result='';
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}


let res = repeatString("abc", 3);
 console.log(res);