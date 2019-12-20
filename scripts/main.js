const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
let imageButton= document.querySelector('button');

imageButton.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === '../resources/images/simple-wind-rose.jpg') {
		myImage.setAttribute ('src', '../resources/images/stille.jpg');
	} else {
		myImage.setAttribute ('src', '../resources/images/simple-wind-rose.jpg');
	}
}
let userButton = document.getElementById('who');

function setUserName() {
	let usersName = prompt('Please enter your name.');
	if(usersName || usersName !== null) {
		localStorage.setItem('name', usersName);
		myHeading.textContent = 'Welcome to the mad house, ' + usersName + '!';
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to the mad house, ' + storedName + '!';
}

userButton.onclick = function() {
	setUserName();
}
