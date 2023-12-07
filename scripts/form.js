const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#validate");

pw2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password1.value !== password2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		password2.style.backgroundColor = "#fff0f3";
		password2.value = "";
		password2.focus();
	} else {
		message.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
	}
}


document.querySelector('form').addEventListener('submit', function(event))
    const emailInput = document.getElementById('email');
    const emailPattern = "/^[a-zA-Z0-9._%+-]+@byui\.edu$/i";
    const errorMessage = document.querySelector('#emailvalidate')

function event() {
    if (emailInput.value != emailPattern) {
        errorMessage.textContent = "Please enter a valid email address with the byui.edu domain";
        message.style.visibility = "show";
        emailInput = "";
    }
        else {
            emailInput = '';
            emailInput.focus();
            event.preventDefault();
        }
};