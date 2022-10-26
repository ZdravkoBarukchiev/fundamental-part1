function dayOfWeek(input) {
  let numDay = input;
  let day = "";
  if (numDay > 7 || numDay < 1) {
    console.log(`Invalid day!`);
  } else {
    switch (numDay) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
    }
  }
  console.log(day);
}
dayOfWeek(30);
