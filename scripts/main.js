let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/trust-me-shark.jpeg') {
		myImage.setAttribute('src', 'images/deep-web.jpeg');
	} else {
		myImage.setAttribute('src', 'images/trust-me-shark.jpeg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'This is a web page, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'This is a web page, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

