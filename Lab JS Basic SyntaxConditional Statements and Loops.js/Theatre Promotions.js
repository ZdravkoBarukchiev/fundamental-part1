function theatrePromotions(day, age) {
  if (age < 0 || age > 122) {
    console.log(`Error!`);
  } else {
    let price = 0;
    switch (day) {
      case "Weekday":
        if (age <= 18 || age > 64) {
          price = 12;
        } else {
          price = 18;
        }
        break;
      case "Weekend":
        if (age <= 18 || age > 64) {
          price = 15;
        } else {
          price = 20;
        }
        break;
      case "Holiday":
        if (age <= 18) {
          price = 5;
        } else if (age > 64) {
          price = 10;
        } else {
          price = 12;
        }
        break;
    }
    console.log(`${price}$`);
  }
}
theatrePromotions("Holiday", 22);
