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
const signupLink = document.querySelector(".signup-link");


// TOGGLE LOGIN & SIGNUP FORMS
const toggleLogin = () => {
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        loginForm.style.display = "block";
        signupForm.style.display = "none"; 
    });

    signupBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        signupForm.style.display = "block";
        loginForm.style.display = "none"; 
    });
}

toggleLogin();

// SIGNUP LINK
signupLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    signupForm.style.display = "block";
    loginForm.style.display = "none";
});

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
            let result = '';
            data.data.forEach((country) => {
                result += `<option>${country.name}</option>`
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
const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    } 
    form.classList.add('was-validated'); 
    console.log("Form validation")
  },
  false
);
});

// CLEARING INPUTS ON REFRESH
function clearInput() {
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type === 'submit') {
            continue;
        } else {
            inputElements[i].value = "";
        }
    }

    selectElement.forEach(element => {
        element.selectedIndex = 0;
    });
}

window.addEventListener('load', clearInput);

