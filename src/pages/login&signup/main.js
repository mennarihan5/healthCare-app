const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const jobFunction = document.querySelector(".job-function");
const jobRole = document.querySelector(".job-role");
const otherInputFunc = document.querySelector(".other-input-function");
const otherInputRole = document.querySelector(".other-input-role");
const inputElements = document.getElementsByTagName("input");
const selectElement = document.querySelectorAll(".form-select");
const countrySelect = document.getElementById("country");
const signupUserName = document.getElementById("signup-username");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupNum = document.getElementById("signup-number");
const signupCompany = document.getElementById("company");
const signupSubmit = document.getElementById("signup-submit");

// TOGGLE LOGIN & SIGNUP FORMS
const toggleLogin = () => {
    loginBtn.addEventListener("click", () => {
        loginForm.style.display = "block";
        signupForm.style.display = "none"; 
    });

    signupBtn.addEventListener("click", () => {
        signupForm.style.display = "block";
        loginForm.style.display = "none"; 
    });
}


// OTHER INPUT FIELD
const otherOptionFunction = () => {
    if(jobFunction.value === "other") {
        otherInputFunc.style.display = "block";
    } else {
        otherInputFunc.style.display = "none";
    }
    if(jobRole.value === "other") {
        otherInputRole.style.display = "block";
    } else {
        otherInputRole.style.display = "none";
    }
}

// COUNTRIES DROPDOWN API
document.addEventListener("DOMContentLoaded", ()=> {
    async function fetchData() {
        try {
          const response = await fetch('https://countriesnow.space/api/v0.1/countries/positions'); 
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            let result = '';
            data.data.forEach((country) => {
                result += `<option>${country.name}</option>`
                console.log(country)
            })
            countrySelect.innerHTML += result;

          } else {
            console.error(response.status);
          }
        } catch (error) {
          console.error(error);
        }
      }
    
      fetchData();
})

// FORM VALIDATION
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

const checkInputs = () => {
    const jobFunctionValue = jobFunction.value.trim();
    const countrySelectValue = countrySelect.value.trim(); 
    const signupUserNameValue = signupUserName.value.trim(); 
    const signupEmailValue = signupEmail.value.trim(); 
    const signupPasswordValue = signupPassword.value.trim();
    const signupNumValue = signupNum.value.trim();
    const signupCompanyValue = signupCompany.value.trim(); 

}

// CLEARING INPUTS ON REFRESH
function clearInput() {
    
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }

    selectElement.forEach(element => {
        element.selectedIndex = 0;
    })
    
}

window.addEventListener('load', clearInput);

toggleLogin();