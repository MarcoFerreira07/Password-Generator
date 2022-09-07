// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercaseWordbank = "abcdefghijklmnopqrstuvwxyz";
let uppercaseWordbank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbersBank = "1234567890";
let specialCharactersWordBank = "!@#$%^&*";
let mainWordBank = ""
//let options = ["lowercase", "uppercase", "numbers", "special characters"];

//let passwordOption = function() {
 // let passwordOption = window.prompt("Would you like to add lowercase, uppercase, numbers, &/or special characteres?")
//}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword(){
  console.log("generate button click");

  let passwordLength = window.prompt("How long would you like your password to be")
  console.log(passwordLength)


  if (!passwordLength) {
    window.alert("The field cannot be empty")
    return;
  }
  //check for input to be valid.... if no was selected for all what response
  let lowercaseAlphabet = window.confirm("Would you like lowercase letters?")
  console.log(lowercaseAlphabet)
  let uppercaseAlphabet = window.confirm("Would you like uppercase letters?")
  console.log(uppercaseWordbank)
  let numberChoice = window.confirm("Would you like numbers included?")
  console.log(numberChoice)
  let specialCharacters = window.confirm("Would you like special characters?")
  console.log(specialCharacters)
  if (lowercaseAlphabet === true) {
    mainWordBank += lowercaseWordbank;
  }
  
  if (uppercaseAlphabet === true) {
    mainWordBank += uppercaseWordbank;

  }

  if (numberChoice === true) {
    mainWordBank += numbersBank;
  }
  if (specialCharacters === true){
    mainWordBank += specialCharactersWordBank;
  }


  console.log(mainWordBank)

  
  let password = "";
  
  for (let i = 0; i < passwordLength; i++) {
    
    let randomNumber = Math.floor(Math.random()*mainWordBank.length);
    
    let randomLetter = mainWordBank[randomNumber];
   
    password += randomLetter;
  }
  console.log(password)
  return password;
}


generateBtn.addEventListener("click", writePassword);

