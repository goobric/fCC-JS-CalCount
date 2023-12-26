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
  //const targetId = '#' + entryDropdown.value;

  // Now targetId holds the result
  console.log(targetId);

  // Use concatenation to create a selector string for .input-container within the element with targetId
  // const targetInputContainerSelector = targetId + ' .input-container';
  const targetInputContainerSelector = `${targetId} .input-container`;

  // Use querySelector to target the .input-container element
  // const targetInputContainer = document.querySelector(
  //   targetInputContainerSelector
  // );

  // Now targetInputContainer holds the .input-container element
  console.log(targetInputContainer);

  /** JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string. **/
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  /** To get all of the number inputs, you can use the querySelectorAll() method.
The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation. **/

  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  /** Now you need to build your dynamic HTML string to add to the webpage. Declare a new HTMLString variable, and assign it an empty template literal string. **/

  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</lable>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</lable>
  <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" />`;

  // targetInputContainer.innerHTML += HTMLString;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateCalories(e) {
  e.preventDefault(); // Call preventDefault() on the event object
  isError = false; // Reset the global error flag to false
}
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  const breakfastNumberInputs = document.querySelectorAll(
    '#breakfast input[type=number]'
  );
  const lunchNumberInputs = document.querySelectorAll(
    '#lunch input[type=number]'
  );
  const dinnerNumberInputs = document.querySelectorAll(
    '#dinner input[type=number]'
  );
  const snacksNumberInputs = document.querySelectorAll(
    '#snacks input[type=number]'
  );
  const exerciseNumberInputs = document.querySelectorAll(
    '#exercise input[type=number]'
  );
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

  // Declare budgetCalories and pass an array containing budgetNumberInput to getCaloriesFromInputs
  const budgetNumberInput = document.getElementById('budget');
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  // Check the truthiness of the global error flag
  if (isError) {
    return; // End function execution if isError is truthy
  }

  const consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories =
    budgetCalories - consumedCalories + exerciseCalories;

  /** Use a ternary operator to set surplusOrDeficit to the string Surplus or Deficit depending on whether remainingCalories is greater than or equal to 0. If it is greater than or equal to 0, then surplusOrDeficit should be Surplus. Otherwise, it should be Deficit. **/
  // Use a ternary operator to set surplusOrDeficit based on remainingCalories
  const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit';
}
/** For your getCaloriesFromInputs function, an array will work for the argument just as well as a NodeList does.
Declare a budgetCalories variable and set it to the result of calling getCaloriesFromInputs – pass an array containing your budgetNumberInput as the argument. **/

function getCaloriesFromInputs(list) {
  let calories = 0;

  for (let i = 0; i < list.length; i++) {
    // const currVal = list[i].value;
    const currVal = cleanInputString(list[i].value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    // Use the addition assignment operator to add currVal to the calories total
    calories += Number(currVal);
  } // end for loop
  return calories;
}

// const addEntryButton = document.getElementById('calculate-calories'); // Replace 'yourAddEntryButtonId' with the actual ID of your button
addEntryButton.addEventListener('click', addEntry);
