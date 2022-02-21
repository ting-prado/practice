const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');

const pass = document.querySelector('#pass');
const passError = document.querySelector('#pass + span.error');

const zip = document.querySelector('#zipCode');
const zipError = document.querySelector('#zipCode + span.error');

const conf = document.querySelector('#passConf');
const confError = document.querySelector('#passConf + span.error');

email.addEventListener('input', () => {
    if(email.validity.typeMismatch) {
        emailError.textContent = 'The email format is incorrect';
    }
    else {
        emailError.textContent = '';
    }
});

pass.addEventListener('input', () => {
    if(pass.validity.valid) {
        passError.textContent = '';
    }
    else if(pass.validity.tooShort) {
        passError.textContent = 'Password is too short.';
    }
    else if(pass.validity.patternMismatch) {
        passError.textContent = "Special characters are not allowed.";
    }
});

zip.addEventListener('input', () => {
    if(zip.validity.valid) {
        zipError.textContent = '';
    }
    else if(zip.validity.rangeOverflow || zip.validity.rangeUnderflow) {
        zipError.textContent = 'Your zip code is invalid.';
    }
});

conf.addEventListener('input', () => {
    if(conf.value == pass.value) {
        confError.textContent = '';
        conf.setAttribute('style', 'background: white; border: 1px solid gray; border-radius: 2px; font-size: 0.9em; width: 9.5em; height: 1.15em');
    }
    else {
        confError.textContent = 'The password does not match.';
        conf.style.background = 'rgb(250, 145, 145)';
    }
})