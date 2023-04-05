const formValidation = (function () {
	let form = document.querySelector('#contact-form');
	let nameInput = document.querySelector('#contact-name');
	let emailInput = document.querySelector('#contact-email');
	let phoneNumberInput = document.querySelector('#contact-phone');
	let messageInput = document.querySelector('#contact-message');

	function showErrorMessage(input, message) {
		let container = input.parentElement;

		// If there is already an error, remove it.
		let error = container.querySelector('.error-message');
		if (error) {
			container.removeChild(error);
		}

		// If there is an error message create and display error.
		if (message) {
			let error = document.createElement('div');
			error.classList.add('error-message');
			error.innerText = message;
			container.appendChild(error);
		}
	}

	function validateName() {
		let value = nameInput.value;

		if (!value || value.length < 2) {
			showErrorMessage(nameInput, 'Name is a required field.');
			return false;
		}

		showErrorMessage(nameInput, null);
		return true;
	}

	function validateEmail() {
		let value = emailInput.value;

		if (!value) {
			showErrorMessage(emailInput, 'Email is a required field.');
			return false;
		}

		if (value.indexOf('@') === -1) {
			showErrorMessage(emailInput, 'You must enter a valid email address.');
			return false;
		}

		if (value.indexOf('.') === -1) {
			showErrorMessage(emailInput, 'You must enter a valid email address.');
			return false;
		}

		showErrorMessage(emailInput, null);
		return true;
	}

	function validateMessage() {
		let value = messageInput.value;

		if (!value || value.length < 5) {
			showErrorMessage(messageInput, 'A message to send is required.');
			return false;
		}

		showErrorMessage(messageInput, null);
		return true;
	}

	function validateForm() {
		let isValidName = validateName();
		let isValidEmail = validateEmail();
		let isValidMessage = validateMessage();
		return isValidName && isValidEmail && isValidMessage;
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault(); // Do not submit to the server
		if (validateForm()) {
			alert('Success!');
		}
	});

	nameInput.addEventListener('input', validateName);
	emailInput.addEventListener('input', validateEmail);
	messageInput.addEventListener('input', validateMessage);
})();
