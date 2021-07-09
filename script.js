// Assignment Code
//defined, but not declared, variables as global for type saftey to make it clear to any other programmers what is included in the password
//with everything listed at the top of the page. I decided to do it this way to logically segment the variables included in the password, questions asked,
//and the core logic (that generates the password) all seperate. 
var generateBtn = document.querySelector("#generate");
//var keys = [[upper,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"], [lower,"abcdefghijklnmopqrstuvwxyz"], [numbers,"0123456789"], [special, "~!@#$%^&*()-_=+"], [length, lengthInteger]];

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklnmopqrstuvwxyz";
var numbers = "0123456789";
var special = "~!@#$%^&*()-_=+";
var length;

var promptQuestions = [ [lower,"confirm","do you want lowercase letters?"],
  [upper,"confirm","do you want uppercase letters?"], 
  [numbers,"confirm","do you want numbers in your password?"],
  [special,"confirm","do you want special characters in your password?"], 
  [length, "prompt", "Password length? Has to be between 8 and 128 characters"] ];
var password = "";
var key = "";
var passwordArray = [];

function lengthFunc (length, i,question) {

  length = prompt(promptQuestions[i][question]);

  length = parseInt(length);

  if (Number.isInteger(length))
  {
    this.length = length;
  } else {
    lengthFunc(length, i,question);
  }
}

function promptUser() {
  
  let question = 3;
  let alertType = 1;
  
  for (var i = 0; i < promptQuestions.length; i++) {
    
    if (promptQuestions[i][alertType] == "confirm") {
      
      if (confirm(promptQuestions[i][question])) {
        passwordArray.push(promptQuestions[i][value]);
      } 

    } 

    if (promptQuestions[i][alertType] == "prompt") {
      lengthFunc(0,i,question); //threw in a 0 just because function expects it the initial zero will be discarded when function is called
    }
     
  }
}

function generatePassword() {

  promptUser();
  var index;

  passwordArray = passwordArray.join("").split("");

  for (var i = 0; i < length; i++) {  
    var index = (Math.floor(Math.random() * passwordArray.length));
    password = password + passwordArray[index]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  password = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
