const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const firstForm = document.getElementById('firstForm');
const secondForm = document.getElementById('secondForm');
const save = document.getElementById('save');
const house = document.getElementById('house');
const username = document.getElementById('name');
const questionArea = document.getElementById('question');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const errorClass = "input--error";
const displayNone = "display-none";
const fields1 = form1.querySelectorAll('.field1');
const fields2 = form2.querySelectorAll('.field2');

email.addEventListener('blur', () => {
    if (!emailRegExp.test(email.value) || !email) {
        email.classList.add(errorClass);
        return false;
    }
    email.classList.remove(errorClass);
    return true;
});

password.addEventListener('blur', () => {
    if (password.value.length < 8 || password.value.length > 100 || !password) {
        password.classList.add(errorClass);
        return false;
    }
    password.classList.remove(errorClass);
    return true;
});

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

save.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < fields2.length; i++) {
        if (!fields2[i].value) {
            fields2[i].classList.add(errorClass);
        }
    }
    if (house.validity.valid && username.validity.valid && questionArea.validity.valid) {
        firstForm.classList.remove(displayNone);
        secondForm.classList.add(displayNone);
        return true;
    }
    return false;
});

