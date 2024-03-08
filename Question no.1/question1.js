document.write ("<h1> Write a program that takes a character (number or string) <br> in a variable & checks whether the given input is a <br> number, uppercase letter or lower case letter. (Hint: ASCII  <br> codes:- A=65, Z=90, a=97, z=122). </h1>")

alert ("<h1> Input anything I will tell you whether it is <br>Number, Letter ( Uppercase or Lowercase) </h1>")

var userInput = prompt ("Input anything")
var letterCase = userInput.charCodeAt(userInput)
var numberCase = parseInt(userInput) 


if (letterCase == 65 || letterCase <= 90) {
    document.write ("<h2>" + userInput + " is a Uppercase Letter <h2>")
} else if (letterCase == 97 || letterCase <= 122){   
    document.write ("<h2>" + userInput + " is a Lowercase Letter <h2>")
} else if (numberCase == userInput ) {
    document.write ("<h2>" + userInput + " is a Number <h2>")
} else {
    document.write ("<h2> Invalid Input <h2>")
}