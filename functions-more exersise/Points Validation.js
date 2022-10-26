function pointsValidation(input) {
  let [x1, y1, x2, y2] = input;
  let firstDistance = Math.sqrt(x1 * x1 + y1 * y1);
  let secondDistance = Math.sqrt(x2 * x2 + y2 * y2);
  let selfDistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  if (firstDistance == Math.round(firstDistance)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (secondDistance == Math.round(secondDistance)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (selfDistance == Math.round(selfDistance)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
pointsValidation([2, 1, 1, 1]);
