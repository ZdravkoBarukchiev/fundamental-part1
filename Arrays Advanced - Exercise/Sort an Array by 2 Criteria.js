function sortAnArrayBy2Criteria(arr) {
  let array = arr;
  array.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  for (el of array) {
    console.log(el);
  }
}
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
