document.write(
  "<h1> Write a program that takes input a number from user & <br> state whether the number is positive, negative or zero. </h1>"
);

alert(
  "Enter any Number, I will show you whether the number is positive or negative or 0."
);
var inputNum = +prompt("Enter any Number");

if (inputNum < 0) {
  document.write("<h2>" + inputNum + " is a Negative number </h2>");
} else if (inputNum === 0) {
  document.write("<h2>" + inputNum + "</h2>");
} else if (inputNum > 0) {
  document.write("<h2>" + inputNum + " is a Positive number </h2>");
}
