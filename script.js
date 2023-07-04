/*Selecting the form element*/
const form = document.querySelector('.form');

/*Selecting the email input*/
const emailInput = document.getElementById('email');

/*Selecting the error message*/
const errorMsg = document.querySelector('.error-msg');

/*Selecting the sign-up, success message & user email*/
const signUp = document.querySelector('.sign-up');
const successMsg = document.querySelector('.success-message');
const userEmail = document.querySelector('.user-email');
const dismissBtn = document.querySelector('.dismiss-btn');

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

    /*If @ is absent*/
    else if (email.indexOf('@') === -1) {
        emailInput.style.border = '1px solid red';
        errorMsg.innerHTML = 'Invalid email';
    }

    /*If . is absent*/
    else if (email.indexOf('.') === -1) {
        emailInput.style.border = '1px solid red';
        errorMsg.innerHTML = 'Invalid email';
    }

    else {
        signUp.style.display = 'none';
        successMsg.style.display = 'block';
        emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
        errorMsg.innerHTML = '';
        userEmail.innerHTML = email;
    }

}
);


dismissBtn.addEventListener('click', () => {
    successMsg.style.display = 'none';
    signUp.style.display = 'block';
    emailInput.value = '';
    
})