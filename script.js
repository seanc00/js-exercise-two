/*

Task:
- create function, attach to button
- create loop that will loop through each field and collect field values
- join all values into a single string
- display values in textResult field

*/

function concatenateFormFields() {
  let concatenatedString = "";

  for (i = 1; i < 7; i++) {
    let fieldValue = document.getElementById("text" + i);
    
    concatenatedString += " " + fieldValue.value;
    
    // TESTS
    //console.log(i);
    //console.log(fieldValue.value);
    //console.log(concatenatedString);
  }

  let element = document.getElementById('textResult');
  element.value = concatenatedString;

  // TESTS
  //console.log("This fnc works")
}