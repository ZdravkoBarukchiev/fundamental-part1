function distanceBetweenPoints(x1, y1, x2, y2) {
  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2);
  let cPow = a * a + b * b;
  return Math.sqrt(cPow);
}
console.log(distanceBetweenPoints(2, 4, 5, 0));
