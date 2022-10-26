function equalSums(arr) {
  let array = arr;
  let arrLength = arr.length;
  let sumIsEqual = false;
  if (arrLength == 1) {
    console.log(0);
  } else {
    for (let i = 0; i < arrLength; i++) {
      let sumA = 0;
      let sumB = 0;
      for (let a = 0; a < i; a++) {
        sumA += array[a];
      }
      for (let b = i + 1; b < arrLength; b++) {
        sumB += array[b];
      }
      if (sumA == sumB) {
        sumIsEqual = true;
        console.log(i);
        break;
      }
    }

    if (!sumIsEqual) {
      console.log("no");
    }
  }
}

equalSums([1]);
