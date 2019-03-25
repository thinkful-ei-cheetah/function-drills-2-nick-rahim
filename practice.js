function jediName(firstName, lastName) {
  return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

console.log(jediName("Beyonce", "Knowles"));

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
