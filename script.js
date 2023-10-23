/*

Task:
- create function, attach to button
- create loop that will loop through each field and collect field values
- join all values into a single string
- display values in textResult field

*/

let seventhField = false;
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
  let element = document.getElementById('form');
  
  element.innerHTML = `
    <button type="button" onclick="resetFormFields();">Reset Fields</button>
    <button type="button" onclick="addText();">Add text to fields</button>
    <button type="button" onclick="addTextField();">Add 7th field</button>
    <button type="button" onclick="removeTextField();">Remove 7th field</button>

    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text1">
    </div>

    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text2">
    </div>
            
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text3">
    </div>
            
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text4">
    </div>
          
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text5">
    </div>
      
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text6">
    </div>

    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text7">
    </div>
    

    <button type="button" onclick="concatenateFormFields();">Press to concatenate text fields</button>

    <div>
      <label class="label">Result:</label>
      <input type="text" id="textResult">
    </div>
  `;
}

function removeTextField() {
  maxValue = 7;
  let element = document.getElementById('form');
  element.innerHTML = `
    <button type="button" onclick="resetFormFields();">Reset Fields</button>
    <button type="button" onclick="addText();">Add text to fields</button>
    <button type="button" onclick="addTextField();">Add 7th field</button>
    <button type="button" onclick="removeTextField();">Remove 7th field</button>

    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text1">
    </div>

    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text2">
    </div>
            
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text3">
    </div>
            
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text4">
    </div>
          
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text5">
    </div>
      
    <div>
      <label class="label">Enter a word:</label>
      <input type="text" id="text6">
    </div> 

    <button type="button" onclick="concatenateFormFields();">Press to concatenate text fields</button>

    <div>
      <label class="label">Result:</label>
      <input type="text" id="textResult">
    </div>
  `;
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