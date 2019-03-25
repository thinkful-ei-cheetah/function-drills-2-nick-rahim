function jediName(firstName, lastName) {
  return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

function beyond(num) {
  if (num === Infinity) {
    console.log("And beyond");
  } else if (num > 0) {
    console.log("To infinity");
  } else if (num < 0) {
    console.log("To negative infinity");
  } else {
    console.log("Staying home");
  }
}

function decode(word) {
  const newWord = word.split(" ");
  let decodedWord = [];

  for (let i = 0; i < newWord.length; i++) {
    switch (newWord[i].charAt(0)) {
      case "a":
        decodedWord.push(newWord[i].charAt(1));
        break;
      case "b":
        decodedWord.push(newWord[i].charAt(2));
        break;
      case "c":
        decodedWord.push(newWord[i].charAt(3));
        break;
      case "d":
        decodedWord.push(newWord[i].charAt(4));
        break;
      default:
        decodedWord.push(" ");
        break;
    }
  }
  return decodedWord.join("");
}

console.log(decode("craft block argon meter bells brown croon droop"));
