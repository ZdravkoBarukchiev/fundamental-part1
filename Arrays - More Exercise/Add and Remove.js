function addAndRemove(input) {
  let arr = input;
  let arrL = arr.length;
  let newArr = [];
  for (let i = 0; i < arrL; i++) {
    let command = arr[i];
    switch (command) {
      case "add":
        newArr.push(i + 1);
        break;
      case "remove":
        newArr.pop();
        break;
    }
  }
  if (newArr.length <= 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
addAndRemove(["add", "add", "remove", "add", "add"]);
