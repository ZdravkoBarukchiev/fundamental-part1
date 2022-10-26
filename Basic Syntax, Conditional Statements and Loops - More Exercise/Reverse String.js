function reverseString(input) {
  let arr = [];
  let str = String(input);
  for (el of str) {
    arr.unshift(el);
  }
  console.log(arr.join(''));
}
reverseString(1234);
