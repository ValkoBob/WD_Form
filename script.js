const firstForm = document.getElementById('firstForm');
const secondForm = document.getElementById('secondForm');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errorClass = "input--error";
const displayNone = "display-none";
const fields1 = form1.querySelectorAll('.field1');
const fields2 = form2.querySelectorAll('.field2');

const email = document.getElementById('email');
let switchEmailError = true;

function checkEmail() {
    if (!emailRegExp.test(email.value) || !email) {
        email.classList.add(errorClass);
        return false;
    }
    email.classList.remove(errorClass);
    return true;
}

email.addEventListener('blur', () => {
    if (switchEmailError) {
        switchEmailError = false;
        return checkEmail();
    }
});

email.addEventListener('keyup', () => {
    if (!switchEmailError) {
        return checkEmail();
    }
});

const password = document.getElementById('password');
let switchPasswordError = true;

function checkPassword() {
    if (password.value.length < 8 || password.value.length > 100 || !password) {
        password.classList.add(errorClass);
        return false;
    }
    password.classList.remove(errorClass);
    return true;
}

password.addEventListener('blur', () => {
    if (switchPasswordError) {
        switchPasswordError = false;
        return checkPassword();
    }
});

password.addEventListener('keyup', () => {
    if (!switchPasswordError) {
        return checkPassword();
    }
});

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < fields1.length; i++) {
        if (!fields1[i].value) {
            fields1[i].classList.add(errorClass);
        }
    }
    if (email.validity.valid && password.validity.valid) {
        firstForm.classList.add(displayNone);
        secondForm.classList.remove(displayNone);
        return true;
    }
    return false;
});

const name = document.getElementById('name');
const regExpForAlphaNumeric = /^[a-zA-Z0-9_]*$/;
let switchNameError = true;

function checkName() {
    if (!regExpForAlphaNumeric.test(name.value) || !name) {
        name.classList.add(errorClass);
        return false;
    }
    name.classList.remove(errorClass);
    return true;
}

name.addEventListener('blur', () => {
    if (switchNameError) {
        switchNameError = false;
        return checkName();
    }
});

name.addEventListener('keyup', () => {
    if (!switchNameError) {
        return checkName();
    }
});

const questionArea = document.getElementById('question');
let switchQuestionAreaError = true;

function checkQuestionArea() {
    if (questionArea.value.length < 8 || questionArea.value.length > 100 || !questionArea) {
        questionArea.classList.add(errorClass);
        return false;
    }
    questionArea.classList.remove(errorClass);
    return true;
}

questionArea.addEventListener('blur', () => {
    if (switchQuestionAreaError) {
        switchQuestionAreaError = false;
        return checkQuestionArea();
    }
});

questionArea.addEventListener('keyup', () => {
    if (!switchQuestionAreaError) {
        return checkQuestionArea();
    }
});

const save = document.getElementById('save');
save.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < fields2.length; i++) {
        if (!fields2[i].value) {
            fields2[i].classList.add(errorClass);
        }
    }
});

