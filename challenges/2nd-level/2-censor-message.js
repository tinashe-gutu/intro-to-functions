function censorMessage(string, list) {
  let rawWords = string.split(" ");
  let resultArr = [];

  for (let word of rawWords) {
    let lowerWord = word.toLowerCase();
    if (list.includes(lowerWord)) {
      resultArr.push("*****");
    } else {
      resultArr.push(word);
    }
  }

  let message = resultArr.join(" ");
  return message;
}

console.log(
  censorMessage("don't mess with cats", ["mess"]),
  "should be:",
  "don't ***** with cats"
);
console.log(
  censorMessage("Are you sure that this is safe", ["are", "is"]),
  "should be:",
  "***** you sure that this ***** safe"
);
console.log(
  censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]),
  "should be:",
  "I CANNOT ***** *****"
);
