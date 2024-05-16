const patientGroup = document.querySelectorAll('.patient-group');
const patientGroup2 = document.querySelectorAll('.patient-group2');
const filterRow = document.querySelectorAll('.filter-row');
const filterRow2 = document.querySelectorAll('.filter-row2');
const filterRowWrapper = document.querySelector('.filter-row-wrapper');
const filterRowWrapper2 = document.querySelector('.filter-row-wrapper2')
const filterInput = document.querySelectorAll('.filter-input');
const filterInput2 = document.querySelectorAll('.filter-input2');
const percentageInputs = document.querySelectorAll('.percentage-input');
const percentageInputs2 = document.querySelectorAll('.percentage-input2');
const calculate = document.querySelector('.calculate');
const calculate2 = document.querySelector('.calculate2');
const fieldset = document.querySelector('.fieldset');
const addFilter = document.querySelector('.add-filter');
const populationSubGroup = document.querySelectorAll('.population-sub-group');
const populationForm = document.querySelector('.population-form');


// addFilter.addEventListener('click', () => {
//     if (populationSubGroup.length < 4) {
//         const firstSubGroup = populationSubGroup[0];

//         const newSubGroup = firstSubGroup.cloneNode(true);

//         populationForm.appendChild(newSubGroup);

//         if (populationSubGroup.length === 4) {
//             addFilter.disabled = true; 
//         }
//     }

 
// })

calculate.addEventListener('click', (event) => {
    event.preventDefault();
    fieldset.disabled = false;
    console.log(fieldset)
})




percentageInputs.forEach(input => {
    input.addEventListener('input', () => {

        let currentValue = parseInt(input.value);

        if (currentValue < 0) {
            currentValue = 0;
        } else if (currentValue > 100) {
            currentValue = 100;
        }

        input.value = currentValue;

        const inputArray = Array.from(percentageInputs);
        const secondInput = inputArray.find(second => second !== input);
        const secondValue = 100 - currentValue;
        
       secondInput.value = secondValue;
    });
});

percentageInputs2.forEach(input => {
    input.addEventListener('input', () => {

        let currentValue = parseInt(input.value);

        if (currentValue < 0) {
            currentValue = 0;
        } else if (currentValue > 100) {
            currentValue = 100;
        }

        input.value = currentValue;

        const inputArray = Array.from(percentageInputs2);
        const secondInput = inputArray.find(second => second !== input);
        const secondValue = 100 - currentValue;
        
       secondInput.value = secondValue;
    });
});


filterInput.forEach((filter, index) => {
    filter.addEventListener('keyup', () => {
        if (index === 0 && filter.value !== null && filter.value !== '' && filter.value !== undefined) {
            filterInput[1].value = 'Other';
        }
    })
})

filterInput2.forEach((filter, index) => {
    filter.addEventListener('keyup', () => {
        if (index === 0 && filter.value !== null && filter.value !== '' && filter.value !== undefined) {
            filterInput2[1].value = 'Other';
        }
    })
})

patientGroup.forEach((patient) => {
    patient.addEventListener('click', () => {
        const existingRows = filterRowWrapper.querySelectorAll('.filter-row').length;

        if (existingRows < 5) {
            const firstFilterRow = filterRow[0]; 

            filterRowWrapper.appendChild(firstFilterRow.cloneNode(true));
        } 
    });
});

patientGroup2.forEach((patient) => {
    patient.addEventListener('click', () => {
        const existingRows = filterRowWrapper2.querySelectorAll('.filter-row').length;

        if (existingRows < 3) {
            const firstFilterRow = filterRow[0]; 

            filterRowWrapper2.appendChild(firstFilterRow.cloneNode(true));
        } 
    });
});




