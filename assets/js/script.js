// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// define function generatePassword()
function generatePassword() {
  var passwordShown = "";
  var passwordLength = 0;
  var OptionLowerCase = false, OptionUpperCase = false, OptionNumeric = false, OptionSpecial = false;

  // password length prompt
  passwordLength = window.prompt("How long would you like your password? Please select a number between 8 and 128.");

  // verify password length
  if (passwordLength >= 8 && passwordLength <= 128) {

    // if true, begin confirm prompts for lower case, upper case, numeric and special characters
    OptionLowerCase = window.confirm("Would you like lower case letters?");
    OptionUpperCase = window.confirm("Would you like upper case letters?");
    OptionNumeric = window.confirm("Would you like numeric values?");
    OptionSpecial = window.confirm("Would you like special characters?");

    // verify confirmation of at least one character type
    if (
      OptionLowerCase ||
      OptionUpperCase ||
      OptionNumeric ||
      OptionSpecial) {
      return passwordShown = createPassword(passwordLength, [OptionLowerCase, OptionUpperCase, OptionNumeric, OptionSpecial]);
    }
    // if no character types selected
    else {
      window.alert("Please pick at least one character type.");
    }
  }
  // if password length is not between 8 and 128
  else {
    window.alert("You have chosen an invalid password length. Please try again.");
  }
}

function createPassword(passwordLength, passwordOptions) {
  var generatedPassword = "";
  const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericSet = "1234567890";
  const specialSet = "`~!@#$%^&*()_-=+[{]}:;<>?/|";

  for(var i = 0; i < passwordLength; i++) {
    // establish randomSet variable
    var randomSet;

    // ensure that characters are valid with prompted options chosen
    do {
      randomSet = Math.floor(Math.random() * passwordOptions.length);
    } while(!passwordOptions[randomSet]);

    // generate random characters
    switch(randomSet) {
      case 0: // lowercase
        generatedPassword += lowerCaseSet[Math.floor(Math.random() * lowerCaseSet.length)];
        break;
      case 1: // uppercase
        generatedPassword += upperCaseSet[Math.floor(Math.random() * upperCaseSet.length)];
        break;
      case 2: // numeric
        generatedPassword += numericSet[Math.floor(Math.random() * numericSet.length)];
        break;
      case 3: // special
        generatedPassword += specialSet[Math.floor(Math.random() * specialSet.length)];
        break;
    }
  }
  return generatedPassword;
}