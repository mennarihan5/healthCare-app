let loginBtn = document.querySelector(".login-btn");
let signupBtn = document.querySelector(".signup-btn");
let loginForm = document.querySelector(".login-form");
let signupForm = document.querySelector(".signup-form");
let otherOption = document.querySelector(".other-option");
let otherInput = document.querySelector(".other-input");

loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active-login");
    loginForm.classList.remove("hide-login");
    signupForm.classList.remove("active-signup");
    signupForm.classList.add("hide-signup");
})

signupBtn.addEventListener("click", () => {
    signupForm.classList.add("active-signup");
    signupForm.classList.remove("hide-signup");
    loginForm.classList.remove("active-login");
    loginForm.classList.add("hide-login");
})


otherOption.addEventListener("click", () => {
    otherInput.classList.toggle("active-other-input");
})

// CLEARING INPUTS ON REFRESH
function clearInput() {
    const inputElements = document.getElementsByTagName("input");
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }

    const selectElement = document.querySelector(".form-select");
    selectElement.selectedIndex = 0;
}

window.addEventListener('load', clearInput)