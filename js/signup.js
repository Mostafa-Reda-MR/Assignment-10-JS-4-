let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('userEmailInput');
let passwordInput = document.getElementById('userPasswordInput');
let signUpBtn = document.getElementById('signUpBtn');
let alertMessage = document.getElementById('alertMessage');
let userContainer = [];

if (localStorage.getItem('users') != null) {
    userContainer = JSON.parse(localStorage.getItem('users'))
}

// -------------------------------------------------[ Sign Up function ]---------------------------------------------------------

function signUp() {
    let userData = {
        userName: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    if (checkInputsEmpty() == true) {
        getAlertMessage('One of inputs is empty', 'rgb(200, 3, 3)', 'transparent');
    }
    else {
        if (checkRepeatEmail() == true) {
            // alert("Email Already Exist");
            getAlertMessage('Email Already Exist', 'rgb(200, 3, 3)', 'transparent');
        }
        else {
            userContainer.push(userData);
            localStorage.setItem('users', JSON.stringify(userContainer));
            getAlertMessage('Success', 'white', 'green');
            clearUserData();
        }
    }
}

// -------------------------------------------------[ Clear User Data function ]-----------------------------------------------------

function clearUserData() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

// -------------------------------------------------[ Alert Message function ]-------------------------------------------------------

function getAlertMessage(text, color, bgColor) {
    alertMessage.classList.replace('d-none', 'd-block');
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
    alertMessage.style.backgroundColor = bgColor;
}

function removeAlertMessage() {
    alertMessage.classList.replace('d-block', 'd-none');
}

// -------------------------------------------------[ Check Inputs Empty function ]---------------------------------------------------

function checkInputsEmpty() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
        return true;
    }
    else {
        return false;
    }
}

// -------------------------------------------------[ Check Repeat Email function ]---------------------------------------------------

function checkRepeatEmail() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailInput.value){
            return true;
        }
    }
}

// ----------------------------------------------------------[ Add Events ]-----------------------------------------------------------

signUpBtn.addEventListener('click', signUp);
userNameInput.addEventListener('click', removeAlertMessage);
emailInput.addEventListener('click', removeAlertMessage);
passwordInput.addEventListener('click', removeAlertMessage);
