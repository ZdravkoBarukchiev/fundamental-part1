function biggestOf3Numbers(a, b, c) {
  let res = Number.MIN_SAFE_INTEGER;
  if (a > res) {
    res = a;
  }
  if (b > res) {
    res = b;
  }
  if (c > res) {
    res = c;
  }
  console.log(res);
}

biggestOf3Numbers(11,2,6)
