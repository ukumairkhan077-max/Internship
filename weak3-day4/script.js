const form = document.getElementById("form");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const data = new FormData(form);

    const username = data.get("username").trim();
    const email = data.get("email").trim();
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");

    if(username===""){
        usernameError.textContent="Username is required";
        usernameError.style.display="block";
    }
    else{
        usernameError.style.display="none";
    }

    if(!email.includes("@")){
        emailError.textContent="Enter a valid email";
        emailError.style.display="block";
    }
    else{
        emailError.style.display="none";
    }

    if(password.length<8){
        passwordError.textContent="Password must be at least 8 characters";
        passwordError.style.display="block";
    }
    else{
        passwordError.style.display="none";
    }

    if(confirmPassword!==password){
        confirmError.textContent="Passwords do not match";
        confirmError.style.display="block";
    }
    else{
        confirmError.style.display="none";
    }

});