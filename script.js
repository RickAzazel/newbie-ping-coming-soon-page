/* =============== Variables =============== */
const form = document.getElementById('form');


/* =============== Functions =============== */
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorMessage = inputControl.querySelector('.error-text');

	errorMessage.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
};

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorMessage = inputControl.querySelector('.error-text');

	errorMessage.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = element => {
	const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return reg.test(String(element).toLowerCase());
};

const validateInput = () => {
	const email = document.getElementById('email');
	const emailValue = email.value.trim();

	if (emailValue === '') {
		setError(email, 'Email cannot be empty');
	}
	else if (!isValidEmail(emailValue)) {
		setError(email, 'Please provide a valid email address');
	}
	else {
		setSuccess(email);
	}
};

/* =============== Events =============== */
form.addEventListener('submit', e => {
	e.preventDefault();

	validateInput();
});