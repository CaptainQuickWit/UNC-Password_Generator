// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function promptUser() {
  let value = 0;
  let question = 2;
  let alertType = 1;
  
  for (var i = 0; i < promptQuestions.length; i++) {
    
    if (promptQuestions[i][alertType] == "confirm") { //if its an ok/cancel alert run these datatypes
      
      if (confirm(promptQuestions[i][question])) {
        passwordArray.push(promptQuestions[i][value]); //if user wants those characters it'll be added
      } 

    } 

    if (promptQuestions[i][alertType] == "prompt") { //if the alerttype is a prompt the question will return a different datatype
      
      length = parseInt(prompt(promptQuestions[i][question])); //string to an integer

      //this if statement causes the for loop to loop back around if user doesn't pass in a number
      if (!Number.isInteger(length) || length < 8 || length > 128){
        i--;
      }
    
    }
     
  }
}

function generatePassword() {

  promptUser(); // asks user for what they want in the password
  var index;

  passwordArray = passwordArray.join("").split(""); // joins the contents then splits them

  //randomly selects all characters to make the password
  for (var i = 0; i < length; i++) {  
    var index = (Math.floor(Math.random() * passwordArray.length));
    password = password + passwordArray[index]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
