// Array of lowercase characters
var lowerCasedChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters
var upperCasedChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of numeric characters
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters
var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

document.querySelector("#generate").addEventListener("click", writePassword);

// User input
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;

// Function to prompt user input
function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );

  // If the passworf length is les than 8 or exceed 128 characters, prompt the alert
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  // Determine character types of the password
  var confirmLowerCase = confirm(
    "Click OK to confirm including lowercase characters."
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm including uppercase characters."
  );
  var confirmNumericCharacter = confirm(
    "Click OK to confirm including numeric characters."
  );
  var confirmSpecialCharacter = confirm(
    "Click OK to confirm including special characters."
  );

  // Password generator ends if all four variables run false
  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false &&
    confirmNumericCharacter === false
  ) {
    alert("You must choose at least one character type");
    var confirmLowerCase = confirm(
      "Click OK to confirm including lowercase characters."
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
    var confirmNumericCharacter = confirm(
      "Click OK to confirm including numeric characters."
    );
    var confirmSpecialCharacter = confirm(
      "Click OK to confirm including special characters."
    );
  }

  var passwordCharacters = [];

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedChars);
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCasedChars);
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numericChars);
  }

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChars);
  }

  console.log(passwordCharacters);

  // For loop to randomize the password each time with a different value
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
