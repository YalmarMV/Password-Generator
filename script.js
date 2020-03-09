// Assignment Code
var generateEl = document.querySelector("generate")
var passwordEl = document.querySelector("password")
var lengthEl = document.querySelector("length");
var symbolsEl = document.querySelector("symbols");
var numbersEl = document.querySelector("numbers");
var lowerCaseEl = document.querySelector("lowercase");
var upperCaseEl = document.querySelector("uppercase");

var randomFunc = {
  symbol: randomSymbol,
  number: randomNumber,
  lower: randomLower,
  upper: randomUpper,
};

// Write password to the #password input
function generatePassword(symbol, number, lower, upper) {
  var generatePassword = "";
  var typesCount = symbol + number + lower + upper;
  var typesArr = [{ symbol }, { number }, { lower }, { upper }].filter(
    item => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }

  //Loop
  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatePassword + randomFunc[funcName]();
    });
  }

  var finalPassword = generatePassword.slice(0, length);
  return finalPassword;
}

// Add event listener to generate button
generateEl.addEventListener("click", function() {
  var length = +lengthEl.Value;
  var withSymbols = symbolsEl.checked;
  var withNumbers = numbersEl.checked;
  var withlowerCase = lowerCaseEl.checked;
  var withupperCase = upperCaseEl.checked;

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

  var symbols = "!@#$%^&*(){}[]=<>?,.";

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