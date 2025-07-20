const password=document.getElementById("pass");
const confirmpass=document.getElementById("confirm");

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
    const passVal = password.value.trim();
    const confirmVal = confirmpass.value.trim();

    let isValid = true;

    // Password validation
    if (passVal === "") {
        setError(password, "This field is required");
        isValid = false;
    } else if (passVal.length < 6) {
        setError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        setSuccess(password);
    }

    // check password
    if(confirmVal===""){
        setError(confirmpass, "This field is required");
        isValid= false;
    }else if(passVal!==confirmVal){
        setError(confirmpass, "Enter correct password");
        isValid=false;
    }else{
        setSuccess(confirmpass);
    }

    if (isValid) {
        alert("Password changed successfully");
        
        setTimeout(()=>{
            window.location.href="login.html";
        },1000);
    }
}