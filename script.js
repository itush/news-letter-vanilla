/*Selecting the form element, email input, error message, 
sign-up, success message, user email & dismiss button */
const form = document.querySelector('.form');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');
const signUp = document.querySelector('.sign-up');
const successMsg = document.querySelector('.success-message');
const userEmail = document.querySelector('.user-email');
const dismissBtn = document.querySelector('.dismiss-btn');

/*Regex pattern for validating email*/
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

/*Add an event listener to the form for the 'submit' event*/
form.addEventListener('submit', (event) => {

    /*Preventing the default form submission behavior */
    event.preventDefault();

    /*Getting the value of the email input field and trimming it*/
    const email = emailInput.value.trim();

    /*If email is empty*/
    if (email === '') {
        emailInput.style.border = '1px solid red';
        errorMsg.innerHTML = 'Please enter your email';
    }
    /*Validating the email pattern*/
    else if (!emailPattern.test(email)) {
        emailInput.style.border = '1px solid red';
        errorMsg.innerHTML = 'Invalid email';
    }
    /*If email is valid*/
    else {
        signUp.style.display = 'none';
        successMsg.style.display = 'block';
        emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
        errorMsg.innerHTML = '';
        userEmail.innerHTML = email;
    }
});

/*Adding an event listener to the dismiss button*/
dismissBtn.addEventListener('click', () => {
    successMsg.style.display = 'none';
    signUp.style.display = 'block';
    emailInput.value = '';
    location.reload();

})