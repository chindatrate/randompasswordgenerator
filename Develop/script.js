// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define constant variable for password criteria
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const pwLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  userPassword = "";
  passwordCharacters = "";

// Select length of password
let pwLength = prompt (
  "Please select the length of your password. (Between 8-24 characters)"
);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
