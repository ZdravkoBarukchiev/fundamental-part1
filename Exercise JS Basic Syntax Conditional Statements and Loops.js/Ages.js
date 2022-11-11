function ages(num) {
  let age = Number(num);
  if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age < 14 && age >= 3) {
    console.log("child");
  } else if (age < 20 && age >= 13) {
    console.log("teenager");
  } else if (age < 66 && age >= 20) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else if (age < 0) {
    console.log("out of bounds");
  }
}
ages(-1);
