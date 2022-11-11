function vacation(group, type, day) {
  let groupOfPeople = group;
  let typeOfTheGroup = type;
  let dayOfTheWeek = day;
  let price = 0;

  switch (typeOfTheGroup) {
    case "Students":
      switch (dayOfTheWeek) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      if (groupOfPeople >= 30) {
        price = price * 0.85;
      }
      break;
    case "Business":
      switch (dayOfTheWeek) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      if (groupOfPeople >= 100) {
        groupOfPeople = groupOfPeople - 10;
      }
      break;
    case "Regular":
      switch (dayOfTheWeek) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        price = price * 0.95;
      }
      break;
  }
  let totalPrice = price * groupOfPeople;
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(
  30,

  "Students",

  "Sunday"
);
