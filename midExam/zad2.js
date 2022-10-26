function solve(input) {
  let frendList = input.shift().split(", ");
  let index = 0;
  let commandLine = input[index].split(" ");
  let command = commandLine[0];
  let blackListCounter = 0;
  let lostNameCounter = 0;
  while (command != "Report") {
    switch (command) {
      case "Blacklist":
        let name = commandLine[1];

        if (frendList.includes(name)) {
          let nameIndex = frendList.indexOf(name);
          frendList.splice(nameIndex, 1, "Blacklisted");
          blackListCounter++;
          console.log(`${name} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }
        break;
      case "Error":
        let errorIndex = Number(commandLine[1]);
        if (errorIndex >= 0 && errorIndex < frendList.length) {
          let errorName = frendList[errorIndex];
          if (errorName !== "Blacklisted" && errorName !== "Lost") {
            console.log(`${errorName} was lost due to an error.`);
            frendList.splice(errorIndex, 1, "Lost");
            lostNameCounter++;
          }
        }

        break;
      case "Change":
        let changeIndex = Number(commandLine[1]);
        let newName = commandLine[2];
        if (changeIndex >= 0 && changeIndex < frendList.length) {
          let currentName = frendList[changeIndex];
          console.log(`${currentName} changed his username to ${newName}.`);
          frendList.splice(changeIndex, 1, newName);
        }
        break;
    }
    index++;
    commandLine = input[index].split(" ");
    command = commandLine[0];
  }
  console.log(`Blacklisted names: ${blackListCounter} `);
  console.log(`Lost names: ${lostNameCounter}`);
  console.log(frendList.join(" "));
}
solve([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
