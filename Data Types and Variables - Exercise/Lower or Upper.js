function lowerOrUpper(input) {
  let whether = input;
  let upWhether = whether.toUpperCase();
  if (whether == upWhether) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
lowerOrUpper("D");
