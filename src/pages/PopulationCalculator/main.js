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



// let sum = 0;
// let total = 100;

// for (let i = 0; i < percentageInput.length; i++) {
//     if (percentageInput.value[i] + percentageInput.value[i+1] > total ||
//         percentageInput.value[i] + percentageInput.value[i+1] < total) {

//         return total;
//     } else {
//         sum += percentageInput.value[i];
//         total = sum;
//     }

// }

// percentageInput.forEach(input => {
//     input.addEventListener('input', (e) => {
//         let total = 0;
//         percentageInput.forEach(input => {
//             total += Number(input.value);
//         });

//         if (total > 100) {
//             const diff = total - 100;
//             percentageInput.forEach(input => {
//                 if (input !== e.target && input.value > 0) {
//                     input.value -= diff / (percentageInput.length - 1);
//                 }
//             });
//         } else if (total < 100) {
//             const diff = 100 - total;
//             percentageInput.forEach(input => {
//                 if (input !== e.target) {
//                     input.value = Number(input.value) + diff / (percentageInput.length - 1);
//                 }
//             });
//         }
//     });
// });


filterInput.forEach((filter, index) => {
    filter.addEventListener('keyup', () => {
        if (index === 0 && filter.value !== null && filter.value !== '' && filter.value !== undefined) {
            filterInput[1].value = 'Other';
        }
    })
})

// filterInput.forEach((filter, index) => {
//     filter.addEventListener('keyup', () => {
//         if (index === 0 && filter.value !== null && filter.value !== '') {
//             // Check if the first input has a value
//             const secondFilterInput = filterInput[1];  // Get the second filter input element
//             if (secondFilterInput) {
//                 secondFilterInput.value = 'Other'; // Set the value of the second filter input to "Other"
//             } else {
//                 console.warn('No second filter input element found.');
//             }
//         }
//     });
// });

patientGroup.forEach((patient) => {
    patient.addEventListener('click', () => {
        const existingRows = filterRowWrapper.querySelectorAll('.filter-row').length;

        if (existingRows < 5) {
            const firstFilterRow = filterRow[0]; 

            filterRowWrapper.appendChild(firstFilterRow.cloneNode(true));
        } 
    });
});




// patientGroup.forEach((patient) => {
//     patient.addEventListener('click', () => {
//         if (filterRow.length < 5) {
//             const allFilterRows = document.querySelectorAll('.filter-row');

//             allFilterRows.forEach((row, index) => {
//                 if (index === 0) { 
//                     filterRowWrapper.appendChild(row.cloneNode(true));
//                     return;
//                 }
//             });
//         }
//         return false;
//     });
// });



