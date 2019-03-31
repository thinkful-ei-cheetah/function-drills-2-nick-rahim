/* eslint-disable indent */
'use strict';

function jediName(firstName, lastName) {
  return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

function decode(word) {
  const newWord = word.split(' ');
  let decodedWord = [];

  for (let i = 0; i < newWord.length; i++) {
    switch (newWord[i].charAt(0)) {
    case 'a':
      decodedWord.push(newWord[i].charAt(1));
      break;
    case 'b':
      decodedWord.push(newWord[i].charAt(2));
      break;
    case 'c':
      decodedWord.push(newWord[i].charAt(3));
      break;
    case 'd':
      decodedWord.push(newWord[i].charAt(4));
      break;
    default:
      decodedWord.push(' ');
      break;
    }
  }
  return decodedWord.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));


function daysInMonth(month, leapYear = false) {
  let result = `${month} has`;

  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      result += ' 31 days';
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      result += ' 30 days';
      break;
    case 'February':
      result +=  leapYear ? ' 29 days' : ' 28 days';
      break;
    default:
      result = '';
      throw new Error('Must provide a valid month.');
  }

  return result;
}

// try {
// console.log(daysInMonth('January'));
// console.log(daysInMonth('February', true));
// console.log(daysInMonth('February'));
// console.log(daysInMonth('what'));
// console.log(daysInMonth('November'));
// } catch (e) {
//   console.error(e.message);
// }

function rockPaperScissors(playerChoice) {
  const cpuChoice = Math.floor(Math.random() * 3) + 1;
  let result = '';
  // rock == 1;
  // paper == 2;
  // scissor == 3;

  switch(playerChoice) {
    case 1:
      console.log('Player chooses ROCK');
      if(cpuChoice === 1) {
        console.log('CPU chooses ROCK');
        console.log('DRAW');
      } else if (cpuChoice === 2) {
        console.log('CPU chooses PAPER');
        console.log('CPU WINS');
      } else {
        console.log('CPU chooses SCISSOR');
        console.log('PLAYER WINS');
      }
      break;
    case 2:
      console.log('Player chooses PAPER');
      if(cpuChoice === 1) {
        console.log('CPU chooses ROCK');
        console.log('PLAYER WINS');
      } else if (cpuChoice === 2) {
        console.log('CPU chooses PAPER');
        console.log('DRAW');
      } else {
        console.log('CPU chooses SCISSOR');
        console.log('CPU WINS');
      }
      break;
    case 3:
      console.log('Player chooses SCISSOR');
      if(cpuChoice === 1) {
        console.log('CPU chooses ROCK');
        console.log('CPU WINS');
      } else if (cpuChoice === 2) {
        console.log('CPU chooses PAPER');
        console.log('PLAYER WINS');
      } else {
        console.log('CPU chooses SCISSOR');
        console.log('DRAW');
      }
      break;
    default:
      console.log('Invalid choice');
      throw new Error('Invalid Player Choice: Please choose 1, 2, or 3');
  }

}

// rockPaperScissors(1);
// rockPaperScissors(2);
// rockPaperScissors(3);
// rockPaperScissors(4);