var num1 = Math.floor(Math.random() * 20);
var num2 = Math.floor(Math.random() * 20);

if (num1 === num2) {
  alert("the first number: '" + num1 + "' is equal to the second number: '" + num2 + "'");
} else if (num1 < num2) {
  alert("the first number: '" + num1 + "' is less than the second number: '" + num2 + "'");
} else {
  alert("the first number: '" + num1 + "' is greater than the second number: '" + num2 + "'");
}
