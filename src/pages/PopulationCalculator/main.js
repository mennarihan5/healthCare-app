const patientGroup = document.querySelectorAll('.patient-group');
const filterRow = document.querySelectorAll('.filter-row');
const filterRowWrapper = document.querySelector('.filter-row-wrapper');
const filterInput = document.querySelectorAll('.filter-input');
const percentageInput = document.querySelectorAll('.percentage-input');
const percentageInputs = document.querySelectorAll('.percentage-input');

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

filterInput.forEach((filter, index) => {
    filter.addEventListener('keyup', () => {
        if (index === 0 && filter.value !== null && filter.value !== '' && filter.value !== undefined) {
            filterInput[1].value = 'Other';
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





