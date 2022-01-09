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

if (pwLength >= 8 && pwLength <= 24) {
  password.length = pwLength;
} else {
  alert("Please select a password between 8-24 characters");
}

// Confirm to include lowercase letters
var isLowerCase = confirm("Click OK to include lowercase letters");
// Confirm to include uppercase letters
var isUpperCase = confirm("Click OK to include uppercase letters");
// Confirm to include numbers
var isNumeric = confirm("Click OK to include numbers");
// Confirm to include special characters
var hasSpecialChars = confirm("Click OK to include special characters");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
