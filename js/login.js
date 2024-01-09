let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');
let alertMessage = document.getElementById('alertMessage');
let userContainer = [];

if (localStorage.getItem('users') != null) {
    userContainer = JSON.parse(localStorage.getItem('users'))
}

// -------------------------------------------------[ LogIn function ]---------------------------------------------------------

function logIn() {
    if (checkInputsEmpty() == true) {
        getAlertMessage('One of inputs is empty', 'rgb(200, 3, 3)', 'transparent');
    }
    else {
        if (checkEmailAndPassword() == true) {
            window.location.href = 'home.html';
        }
        else {
            getAlertMessage('Email or Password incorrect', 'rgb(200, 3, 3)', 'transparent');
        }
    }
}

// --------------------------------------------[ Check Email And Password function ]------------------------------------------------

function checkEmailAndPassword() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailLoginInput.value && userContainer[i].password == passwordLoginInput.value) {
            localStorage.setItem('userName', userContainer[i].userName);
            return true;
        }

    }
}

// -------------------------------------------------[ Check Inputs Empty function ]---------------------------------------------------

function checkInputsEmpty() {
    if (emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}

// -------------------------------------------------[ Alert Message function ]---------------------------------------------------------

function getAlertMessage(text, color, bgColor) {
    alertMessage.classList.replace('d-none', 'd-block');
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
    alertMessage.style.backgroundColor = bgColor;
}

function removeAlertMessage() {
    alertMessage.classList.replace('d-block', 'd-none');
}

// ----------------------------------------------------------[ Add Events ]-----------------------------------------------------------

loginBtn.addEventListener('click', logIn);
emailLoginInput.addEventListener('click', removeAlertMessage);
passwordLoginInput.addEventListener('click', removeAlertMessage);
