document.write(
  "<h1> Write a program that <br> a. Store correct password in a JS variable. <br> b. Asks user to enter his/her password <br> c. Validate the two passwords: <br> i. Check if user has entered password. If not, then <br> give message “ Please enter your password” <br> ii. Check if both passwords are same. If they are <br> same, show message “Correct! The password you <br> entered matches the original password”. Show  <br> “Incorrect password” otherwise. </h1>"
);

var password;
var password = prompt("Enter Your Password");
var passwordConfirm = prompt("Confirm Password");

if (password != passwordConfirm) {
  alert("Incorrect Password!");
} else if (password === passwordConfirm) {
  alert("Correct! Password You entered matches the original passowrd");
} else {
  alert("Incorrect Password!");
}
