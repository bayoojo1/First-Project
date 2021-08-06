let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");

let completeName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();
let nameLenght = completeName.length;

alert("The string " + completeName + " is " + nameLenght + " characters in long");