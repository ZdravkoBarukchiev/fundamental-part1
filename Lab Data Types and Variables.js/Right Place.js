function rightPlace(firstString, chair, secondString) {
  let result = "";
  for (let i = 0; i < firstString.length; i++) {
    let character = firstString[i];
    if (character == "_") {
      character = chair;
    }
    result += character;
  }
  if (result == secondString) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace('Str_ng', 'i', 'String')