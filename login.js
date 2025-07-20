const form = document.getElementById("form");
const email = document.getElementById("mail");
const password = document.getElementById("pass");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
});

function setError(input, message) {
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector(".error");
    errorMsg.innerText = message;
    formControl.classList.add("error");
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector(".error");
    errorMsg.innerText = "";
    formControl.classList.remove("error");
}

function checkInputs() {
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    let isValid = true;

    // Email validation
    if (emailVal === "") {
        setError(email, "Email is required");
        isValid = false;
    } else if (!emailVal.includes("@")) {
        setError(email, "Enter a valid email");
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passVal === "") {
        setError(password, "Password is required");
        isValid = false;
    } else if (passVal.length < 6) {
        setError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (isValid) {
        alert("Login Successful!");
        form.reset();
    }
}
