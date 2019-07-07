const firstForm = document.getElementById('firstForm');
const secondForm = document.getElementById('secondForm');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const emailRegExp = /^[\w\W\d.!#$%&'*+/=?^_`{|}~-]+@[\w\W\d-]+(?:\.[\w\W\d-]+)*$/;
const errorClass = "input--error";
const displayNone = "display-none";
const fields1 = form1.querySelectorAll('.field1');
const fields2 = form2.querySelectorAll('.field2');
const minLengthOfField = 8;
const maxLengthOfField = 100;

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
    if (password.value.length < minLengthOfField || password.value.length > maxLengthOfField || !password) {
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
const regExpForAlphaNumeric = /^[\w\W\d_]*$/;
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
    if (questionArea.value.length < minLengthOfField || questionArea.value.length > maxLengthOfField || !questionArea) {
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

const houses = ["Arryn", "Baratheon", "Bolton", "Frey", "Greyjoy", "Lannister", "Martell", "Stark", "Targaryen",
    "Tarly", "Tully", "Tyrell"];
$(document).ready(function () {
    const slider = $('.slider');
    houses.map((image) => {
        const div = '<div></div>';
        slider.append($(div).addClass('slide').html(
            `<div class="slides--card"><img src="./images/${image}.jpg" alt="${image}"></div>`));
    });
    slider.slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false
    });
    const select = $('#house');
    let counter = 1;
    select.select2({});
    houses.map((house) => {
        const option = new Option(house, counter++ + "", false, false);
        select.append(option);
    });
    select.select2({closeOnSelect: true});
    select.change(function () {
        slider.slick('slickGoTo', +this.value);
    });
});
