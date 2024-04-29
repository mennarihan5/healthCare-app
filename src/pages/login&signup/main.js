let loginBtn = document.querySelector(".login-btn");
let signupBtn = document.querySelector(".signup-btn");
let loginForm = document.querySelector(".login-form");
let signupForm = document.querySelector(".signup-form");

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