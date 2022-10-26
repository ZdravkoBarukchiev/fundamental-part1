function echoType(input) {
  let parameter = typeof input;
  switch (parameter) {
    case "string":
    case "number":
      console.log(parameter);
      console.log(input);
      break;
    default:
      console.log(parameter);
      console.log("Parameter is not suitable for printing");
      break;
  }
}
echoType(null);
