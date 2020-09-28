//!------------Setting variables before the function--------!///
  
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//!------------EVENT LISTENER FOR THE GENERATEBTN-------!////

generateBtn.addEventListener("click", writePassword);

//!-------FUNTION TO MAKE THE PASSWORD--------!/////////----
function writePassword() {

    //--newPassword will be the compiled password. passGen will be used as we make selections--//
    var newPassword = "";
    var passGen = "";

    //---CHOOSE LENGTH OF PASSWORD---//

    var passwordLengthInput = prompt("Choose a password length 8-128");
    
    //----IF USER CHOOSES A NUMBER OUTSIDE THE PARAMETER
    if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128)) {
        alert("Only numbers between 8 and 128!");
        return;
    } 
 
    //----CHOOSING LOWERCASE LETTERS?---///
    var lowercaseInput = confirm("Use Lowercase Letters?");

    if (lowercaseInput) {
        passGen += lowercase;
    }
    //----If user doesn't confirm a selection, passGen remains the same-----///
    else {
      passGen = passGen
    }
    
    //----CHOOSING UPPERCASE LETTERS?---/// 

    var uppercaseInput = confirm("Use Uppercase Letters?");

    if (uppercaseInput) {
        passGen += uppercase;
    }

    else {
      passGen = passGen
    }
    
    //----CHOOSING NUMBERS LETTERS?---/// 

    var numbersInput = confirm("Use Numbers?");

    if (numbersInput) {
        passGen += numbers;
    }

    else {
      passGen = passGen
    }

    //----CHOOSING SPECIAL CHARACTERS?------///

    var charactersInput = confirm("Use Special Characters?");

    if (charactersInput) {
        passGen += characters;
    }

    else {
      passGen = passGen
    }
    
    //------USER ALERTED IF THEY DID NOT MAKE A SELECTION------////
    if (passGen === "") {
        alert("Choose at least one Option!");
        return;
    }
    
    //-------ONCE SELECTIONS ARE COMPILED IN VAR PASSGEN, THE LOOP RANDOMLY SELECTS FROM THE SELECTED CHARACTERS
    if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
        for (var i = 0; i < passwordLengthInput; i++) {
            newPassword += passGen.charAt(Math.floor(Math.random() * passGen.length));
        };
        
    };

    console.log(newPassword);
    
    ///----SENDING THE RESULTS OF NEW PASSWORD TO THE HTML #PASSWORD ELEMENT----/////
    password.textContent = newPassword;
};


