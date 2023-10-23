/*

Task:
- create function, attach to button
- create loop that will loop through each field and collect field values
- join all values into a single string
- display values in textResult field

*/

let maxValue = 7;

function concatenateFormFields() {

  let concatenatedString = "";

  for (i = 1; i < maxValue; i++) {
    let fieldValue = document.getElementById("text" + i);
    
    concatenatedString += " " + fieldValue.value;
    
    // TESTS
    //console.log(i);
    //console.log(fieldValue.value);
    //console.log(concatenatedString);
  }
  // enters value into result field
  let element = document.getElementById('textResult');
  element.value = concatenatedString;

  // TESTS
  //console.log("This fnc works")
}

function addTextField() {
  maxValue = 8;
  let element = document.getElementById('field7');
  
  element.innerHTML = `
    <label class="label">Enter a word:</label>
    <input type="text" id="text7">
  `;
}

function removeTextField() {
  maxValue = 7;
  let element = document.getElementById('field7');
  element.innerHTML = ``;
}


// EXTRAS (Stuff that wont be marked  but just as extras)
function resetFormFields() {
  for (i = 1; i < maxValue; i++) {
    let fieldValue = document.getElementById("text" + i);
    
    fieldValue.value = "";
  }
}

function addText() {
  let count = 0;
  let wordsArray = ["Hello", "my", "name", "Is", "Sean", "Connolly", "Dev"];

  for (i = 1; i < maxValue; i++) {
    let fieldValue = document.getElementById("text" + i);
    
    //set field values of words in array 1-6
    fieldValue.value = wordsArray[count];

    count ++;
  }
}