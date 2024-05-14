document.addEventListener("DOMContentLoaded", ()=> {
    const pswd = document.querySelector("#password");
    const confirmed = document.querySelector("#confirm");
    const submitButton = document.querySelector("#submit-form");

    const checkPswd = ()=> {
        if(pswd.value !== confirmed.value) {
            confirmed.setCustomValidity("Passwords do not match")
        }
        else {
            confirmed.setCustomValidity("");
        }
    };
    
    submitButton.addEventListener("click", checkPswd);
    confirmed.addEventListener("input", checkPswd);
});