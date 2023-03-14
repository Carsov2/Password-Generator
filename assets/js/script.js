// Assignment Code
var generateBtn = document.querySelector("#generate");

// These few functions I did have assistance with, I am still struggling to fully understand Math. method but am studying !

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {
  console.log("button test");
  let click = prompt("How many Characters would you like in your password? (8-128)")

  let passwordLength = parseInt(click)

  if (isNaN(passwordLength)) {
    window.alert("That is not a valid number")
  }else{
    window.alert("that is a valid number")
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 Characters!😠")
    return
  }

  let userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  let userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  let userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")  
  let userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?") 

  let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  let lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] // I know there is a way to not have to retype this, I just couldn't remember the exact method.

  // i did have assistance from a buddy to learn these if statements however he does use VAR while I prefer let and const. so I still put my twist on this

  let characterOptions = []

  if (userWantsNumbers === true) {
    characterOptions.push(numberList)
  }
  
  if (userWantsSymbols === true) {
    characterOptions.push(symbolList)
  }
  if (userWantsLowercase === true) {
    characterOptions.push(lowercaseList)
  }
  if (userWantsUppercase === true) {
    characterOptions.push(uppercaseList)
  }
  
  if (characterOptions.length === 0) {
    characterOptions.push(lowercaseList)
  }

  let generatePassword = ""

  for (let i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(characterOptions)
    let randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  } 

  
  return generatePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
