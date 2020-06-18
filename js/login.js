var elUsername = document.getElementById('user');
var elPassword = document.getElementById('pass');						
var elMsg = document.getElementById('feedback'); 

function checkUsername(minLength) {
	if (elUsername.value.length < minLength) {
		elMsg.innerHTML = '<p>Username must be ' + minLength + ' characters or more</p>';
	} else {
		elMsg.innerHTML = '';  // Clear any error message
	}
}
function checkPassword(minLength) {
	if (elPassword.value.length < minLength) {
		elMsg.innerHTML = '<p>Password must be ' + minLength + ' characters or more</p>';
	} else {
		elMsg.innerHTML = '';  // Clear any error message
	}
}

elUsername.addEventListener('blur', function() {checkUsername(7)}, false);  // Anonymous function

elPassword.addEventListener('blur', function() {checkPassword(7)}, false);

function setup() {
	var textInput; 
	textInput = document.getElementById('user'); 	// Get username input
	textInput.focus(); 								// Give username focus
}

window.addEventListener('load', setup, false); 		// when page loads call setup()