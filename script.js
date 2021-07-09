// Assignment Code
//defined, but not declared, variables as global for type saftey to make it clear to any other programmers what is included in the password
//with everything listed at the top of the page. I decided to do it this way to logically segment the variables included in the password, questions asked,
//and the core logic (that generates the password) all seperate. 
var generateBtn = document.querySelector("#generate");

//everything is declared as global variable at root of script for type saftey so it is clear what datatypes they are supposed to be. 
// default values are declared in a function

//these 4 variables will always be here regardles of what the password will be made up of or any changes made to the schema
var keys = [];
var passwordObject = [];
var password;
var theManual;

//declare all variables used in the script here.
function declareDefaultKeys() {
  //var objectLength = 6; //length even include this variable describing how long the object is
  var numOfQues = 4; //how many questions the user will be prompted for
  var promptQuestions = [ "Password length? Has to be between 8 and 128 characters", "do you want lowercase letters?","do you want uppercase letters?", 
  "do you want numbers in your password?","do you want special characters in your password?"];
  var userInput= false; //default value
  var password = null; //default value
  var special = false; //default value
  var lower = [userInput,"abcdefghijklmnopqrstuvwxyz"];
  var upper = [userInput,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var number = [userInput,"0123456789"];
  keys = [length,lower,upper,number,special];
  theManual = [["numOfQues",numOfQues], ["promptQuestions",promptQuestions], ["userInput",userInput], 
  ["password",password], ["special",special], ["lower",lower], ["number",number], ["keys",number],["theManual","theManual is a nested array"],
  ["passwordObject","object in the form of an Array"]];
  //passwordObject contains all information about the password as an Object in the form of an array
  passwordObject = [promptQuestions, pwlength, keys, password, theManual];
}

/*this function is added to help diagnose if the password isn't including all the variables/other issues, included incase the dev team whated 
to change some of the variables but */ 
function diagnostics() {
  try { for (var i = 0; i < theManual.length; i++ ) { console.log(theManual[i][0] + "==>"+theManual[i][1]); } 
    return true;
  } catch (err) { console.log(err); return false; }
}

function promptUser(promptQuestions, keys) {
  if (promptQuestions.length === keys.length) { //if edits to the code are made this will help catch errors early on, especially usefull if a group is working on the code
    for (var i = 0; promptQuestions.length; i++) {
      keys[i] = confirm(promptQuestions[i]);
    }
    return keys;
  } else { console.log("promptQuestions.length !== keys.length")}
}

// Write password to the #password input
function writePassword() {
  declareDefaultKeys();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
