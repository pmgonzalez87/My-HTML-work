// whrnt he add button is clicked,
// take the value from the first input
// take the value from the second input
// add them together
// udpate the innertext of the result div with the sum.

var firstNumberInput = document.getElementById("firstNumber");
var secondNumberInput = document.getElementById("secondNumber");
function displayResult(res, operation) {
  var result = document.getElementById("result");
  result.innerText = res;
  if (operation == "add") {
    result.style.color = "purple";
  } else if (operation == "minus") {
    result.style.color = "lemonchiffon";
  } else if (operation == "mult") {
    result.style.color = "palevioletred";
  } else {
    result.style.color = "coral";
  }
}
function add() {
  if (!parseInt(firstNumberInput.value) || !parseInt(secondNumberInput.value)) {
    displayResult("ERROR", "na");
  } else {
    var sum =
      parseInt(firstNumberInput.value) + parseInt(secondNumberInput.value);
    displayResult(sum, "add");
  }
}
function subtract() {
  var diff =
    parseInt(firstNumberInput.value) - parseInt(secondNumberInput.value);
  displayResult(diff, "minus");
}
function multiply() {
  var product =
    parseInt(firstNumberInput.value) * parseInt(secondNumberInput.value);
  displayResult(product, "mult");
}
function divide() {
  var q = parseInt(firstNumberInput.value) / parseInt(secondNumberInput.value);
  displayResult(q, "div");
}