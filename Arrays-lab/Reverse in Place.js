function reverseInPlace(arr) {
  let a = 0;
  let b = 0;
  let diff = 0;
  let printLine = "";
  for (let i = 0; i < arr.length; i++) {
    a = arr[i];
    diff = a;
    b = arr[arr.length - 1 - i];
    a = b;
    b = diff;

    printLine += a + " ";
  }
  console.log(printLine);
}
reverseInPlace(["a", "b", "c", "d", "e", "f", "j"]);
