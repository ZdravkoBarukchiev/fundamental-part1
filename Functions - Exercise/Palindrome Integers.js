function palindromeIntegers(arr) {
  let array = arr;
  let arrayL = array.length;
  const palindrome = (n) => {
    let strigNum = String(n);
    let reversedString = strigNum.split('').reverse().join("");
    if (strigNum == reversedString) {
      return true;
    } else {
      return false;
    }
  };

  for (let i = 0; i < arrayL; i++) {
    let number = array[i];
    let result = palindrome(number);
    console.log(result);
  }
}
palindromeIntegers([123, 323, 421, 121]);
