document.write(
  "<h1> This if/else statement does not work. Try to fix it:<br> var greeting; <br> var hour = 13; <br>if (hour < 18) { <br> greeting = 'Good day'; <br> else <br> greeting = 'Good evening'; <br>} </h1>"
);

var greeting = "Good day";
var greetings = "Good evening";

var inputHour = prompt("Enter Hour");

var hour = 13;
if (inputHour < 18) {
  document.write("<h2>" + greeting + "</h2>");
} else document.write("<h2>" + greetings + "</h2>");
