// Assignment Code
var generateEl = document.getElementById("generate")
var passwordEl = document.getElementById("password")
var lengthEl = document.getElementById("length");
var symbolsEl = document.getElementById("symbols");
var numbersEl = document.getElementById("numbers");
var lowerCaseEl = document.getElementById("lowercase");
var upperCaseEl = document.getElementById("uppercase");

var randomFunc = {
  symbol: randomSymbol(),
  number: randomNumber(),
  lower: randomLower(),
  upper: randomUpper(),
};

// Write password to the #password input
function generatePassword(symbol, number, lower, upper) {
  console.log("INSIDE GENERATE FUNCTION")
  //var generatePassword = "";
  var typesCount = randomSymbol() + randomNumber() + randomLower() + randomUpper() ;
  var typesArr = [{ symbol }, { number }, { lower }, { upper }].filter(
    item => Object.values(item)[0]
  );
  console.log(typesCount)
  var arrsymbol = randomSymbol();
console.log(arrsymbol)
  console.log(typesArr)
  if (typesCount === 0) {
    return "";

  }
// console.log(randomSymbol())
// console.log(randomNumber())
// console.log(randomLower())
// console.log(randomUpper())
  //Loop
  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatePassword + randomFunc[funcName]();
    
      console.log("inside generate password")
    });
  
  }

  //var finalPassword = generatePassword.slice(0, length);
  //return finalPassword;
  return typesCount
}


// Add event listener to generate button
generateEl.addEventListener("click", function() {
  console.log("click the buttom")
  var length = +lengthEl.Value;
  var withSymbols = symbolsEl.checked;
  var withNumbers = numbersEl.checked;
  var withlowerCase = lowerCaseEl.checked;
  var withupperCase = upperCaseEl.checked;

// add function for the check boxes all of them and the lenght aswell

  passwordEl.innerText = generatePassword(
    withSymbols,
    withNumbers,
    withlowerCase,
    withupperCase,
    length
  );
});


// Here is my generator functions
function randomSymbol() {

  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "?", ",", "."];

  return symbols[Math.floor(Math.random() * symbols.length)];
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}