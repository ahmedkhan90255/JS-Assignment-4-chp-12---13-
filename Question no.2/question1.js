document.write(
  "<h1> Write a JavaScript program that accept two integers and <br> display the larger. Also show if the two integers are equal. </h1>"
);

alert("Write two numbers I will show you the larger number");

var firstNum = +prompt("Enter First Number");
var secondNum = +prompt("Enter Second Number");
var letter = " ";

if (firstNum > secondNum) {
  document.write("<h2>" + firstNum + " is larger than " + secondNum + "</h2>");
} else if (firstNum >= secondNum)
  document.write("<h2>" + firstNum + " is equals to " + secondNum + "</h2>");

if (secondNum > firstNum) {
  document.write("<h2>" + secondNum + " is larger than " + firstNum + "</h2>");
}
if (firstNum === letter) {
  document.write("<h2> Invalid Value Use Numbers Only </h2>");
}
