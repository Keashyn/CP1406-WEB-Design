/*let message = "Hello!";
alert(message);
message = "What is your name?";
let userName = prompt(message);
while (userName.length <= 0){
    userName = prompt("Please enter a user name that has more than one letter.");
}
if (userName.length < 2) {
	alert("I  see you are using an initial")
}
else {
	alert("Your user name is now updated")
}
alert("Your username is: " + userName);
let password = prompt("What is your password?")
while (password.length < 5) {
	password = prompt("Please enter a password longer than 4 characters")
}
alert("Your password is: " + password);*/

function showMessage(prompt) {
    alert(prompt);
}

function getDate() {
    todaysDate = new Date();
    alert("The current year is " + todaysDate.getFullYear() + " and the current month (as a number) is " + todaysDate.getMonth());
}