// Assignment Code
//defined, but not declared, variables as global for type saftey to make it clear to any other programmers what is included in the password
//with everything listed at the top of the page. I decided to do it this way to logically segment the variables included in the password, questions asked,
//and the core logic (that generates the password) all seperate. 
var generateBtn = document.querySelector("#generate");

//everything is declared as global variable at root of script for type saftey so it is clear what datatypes they are supposed to be. 
var promptQuestions = [ ["lower","confirm","do you want lowercase letters?"],
["upper","confirm","do you want uppercase letters?"], 
  ["number","confirm","do you want numbers in your password?"],["special","confirm","do you want special characters in your password?"], 
  ["length", "prompt", "Password length? Has to be between 8 and 128 characters"]];

//var userInput = false; //default value
var password = ""; //default value
var length = [true, passwordLengthInteger, "length"]; //every password will have a length so boolean of true is passed in instead of userInput.
var special = [userInput, "~!@#$%^&*()-_=+", "special"]; //third value is the name of the variable
var lower = [userInput,"abcdefghijklmnopqrstuvwxyz", "lower"]; //third value is name of the valiable 
var upper = [userInput,"ABCDEFGHIJKLMNOPQRSTUVWXYZ", "upper"]; //third value is name of the variable
var number = [userInput,"0123456789","number"]; // third value is name of the variable
var keys = [length,lower,upper,number,special];

var theManual = [["numOfQues",numOfQues], ["promptQuestions",promptQuestions], ["userInput",userInput], 
  ["password",password], ["special",special], ["lower",lower], ["number",number], ["keys",number],["theManual","theManual is a nested array"],
  ["passwordObject","object in the form of an Array"]];
var passwordObject = [promptQuestions, pwlength, keys, password, theManual];

/*this function is added to help diagnose if the password isn't including all the variables/other issues, included incase the dev team whated 
to change some of the variables but */ 
function diagnostics() {
  try { for (var i = 0; i < theManual.length; i++ ) { console.log(theManual[i][0] + "==>"+theManual[i][1]); } 
    return true;
  } catch (err) { console.log(err); return false; }
}
//recursive function
function askLength(length, i) {

  length = prompt(promptQuestions[i][2]); // length used in place of keys[i][0]
  if (length) {
    askLength(0, i);
  }

  if (length < 8 || length > 128) {
    askLength(length,i);
  }
  keys[i][1] = length; 
}

function promptUser() {

  let length;

  if (promptQuestions.length === keys.length) { //if edits to the code are made this will help catch bugs early on, especially usefull if a group is working on the code
    for (var i = 0; promptQuestions.length; i++) { //goes through all of the questions to ask the user 

      if (promptQuestions[i][1] === "prompt") {

        if (keys[i][2] === promptQuestions[i][0]) { //makes sure the two nested arrays are correctly synced so the keys array doesnt get the wrong information
          keys[i][0] = confirm(promptQuestions[i][1]);
        } else { console.log("error: " + keys[i][2] )}
      } else {

        if (keys[i][2] === promptQuestions[i][0]) { //makes sure the two nested arrays are correctly synced so the keys array doesnt get the wrong information
          askLength(0,i); //passing a 0 just because the function is expecting a value and will get discarded
        } else { console.log("error: " + keys[i][2] )}
      }
    } 
    
    return keys; 
  } else { console.log("promptQuestions.length !== keys.length")}
}


function generatePassword() {
  promptUser();


  for (var i = 0; i < characterLength; i++) {
    var index = (Math.floor(Math.random() * userSelection.length));
    password = password + userSelection[index]
  }

  return password

}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
