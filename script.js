// JS Code for Calorie Counter

let isError = false;

const calorieCounter = document.getElementById('calorie-counter');

const budgetNumberInput = document.getElementById('budget');

const entryDropdown = document.getElementById('entry-dropdown');

const addEntryButton = document.getElementById('add-entry');

const clearButton = document.getElementById('clear');

const output = document.getElementById('output');

/**  The split() method splits a string into an array of substrings, and returns the new array. You can pass in an optional separator which tells the method where each split should happen.
For example, passing an empty string into the split method will split the string into an array of individual characters.
const str = 'Hello World';
const strArray = str.split('');
// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
**/
function cleanInputString(str) {
  // const strArray = str.split('');
  // const cleanStrArray = [];
  // for (let i = 0; i < strArray.length; i++) {
  //   // Check if the array ["+", "-", " "] does not include the current character
  //   if (!['+', '-', ' '].includes(strArray[i])) {
  //     cleanStrArray.push(strArray[i]);
  //   }
  // }
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
// Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.
// The \s is a special character that matches any whitespace character (space, tab, newline, and so on).
// The g is a modifier (global flag) that makes the regular expression search for matches throughout the whole string, instead of just the first match.
// [+-\s] matches any of the characters +, -, or whitespace. this is a character set.

function isInvalidInput(str) {
  const regex = /^[+-]?\d+(\.\d+)?$/;
  // const regex =/[0-9]+e[0-9]+/ig;
  // return !regex.test(str);
  return str.match(regex);
}

function addEntry() {
  // Assuming entryDropdown is a DOM element
  const entryDropdown = document.getElementById('entry-dropdown');

  // Use concatenation to add a '#' to the beginning of the value property
  const targetId = '#' + entryDropdown.value;

  // Now targetId holds the result
  console.log(targetId);

  // Use concatenation to create a selector string for .input-container within the element with targetId
  // const targetInputContainerSelector = targetId + ' .input-container';
  const targetInputContainerSelector = `${targetId} .input-container`;

  // Use querySelector to target the .input-container element
  const targetInputContainer = document.querySelector(
    targetInputContainerSelector
  );

  // Now targetInputContainer holds the .input-container element
  console.log(targetInputContainer);
}
/** JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string. **/
