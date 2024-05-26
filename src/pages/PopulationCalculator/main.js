const patientGroup = document.querySelectorAll('.patient-group');
const patientGroup2 = document.querySelectorAll('.patient-group2');
const filterRow = document.querySelector('.filter-row');
const filterRowTwo = document.querySelector('.filter-row-two');
const filterRow2 = document.querySelectorAll('.filter-row2');
const filterRowWrapper = document.getElementById('filterRowWrapper');
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

let counter = 1;

const dynamicInputs = () => {
    const filterRowWrapper = document.getElementById('filterRowWrapper');
    const filterRowTemplate = document.querySelectorAll('.filter-row')[1]; 

    const initializeStaticInputs = () => {
        const staticRows = document.querySelectorAll('.filter-row');
        staticRows.forEach((row, rowIndex) => {
            const staticInputs = row.querySelectorAll('input[type="text"], input[type="number"]');
            staticInputs.forEach((input) => {
                if (input.classList.contains('filter-input')) {
                    input.name = `patient_group[${rowIndex + 1}]`;
                    input.id = `filter-input-static-${rowIndex + 1}`;
                } else if (input.classList.contains('percentage-input')) {
                    input.name = `population_percentage[${rowIndex + 1}]`;
                    input.id = `percentage-input-static-${rowIndex + 1}`;
                } else if (input.classList.contains('desc-input')) {
                    input.name = `description[${rowIndex + 1}]`;
                    input.id = `desc-input-static-${rowIndex + 1}`;
                }
            });
            counter = rowIndex + 1; 
        });
    };

    const addDynamicRow = () => {
        const existingRows = filterRowWrapper.querySelectorAll('.filter-row').length;

        if (existingRows < 5) {
            const newRow = filterRowTemplate.cloneNode(true);

            const newInputsRow = newRow.querySelectorAll('input[type="text"], input[type="number"], output.value');

            newInputsRow.forEach((input) => {
                input.value = '';

                if (input.classList.contains('filter-input')) {
                    input.name = `patient_group[${counter}]`;
                    input.id = `filter-input-${counter}`;
                } else if (input.classList.contains('percentage-input')) {
                    input.name = `population_percentage[${counter}]`;
                    input.id = `percentage-input-${counter}`;
                } else if (input.classList.contains('desc-input')) {
                    input.name = `description[${counter}]`;
                    input.id = `desc-input-${counter}`;
                } else if (input.classList.contains('output-box')) {
                    input.name =`output[${counter}]`;
                    input.id = `output-input-${counter}`;
                    input.textContent = 0;
                }

            });

            filterRowWrapper.appendChild(newRow);

            attachInputListeners(newInputsRow);

            counter++; 
        }
    };

    const attachInputListeners = (inputs) => {
        inputs.forEach((input) => {
            if (input.classList.contains('percentage-input')) {
                // input.addEventListener('input', handlePercentageInput);
            }
        });
    };

    // const handlePercentageInput = (event) => {
    //     const percentageInputs = Array.from(document.querySelectorAll('.percentage-input'));
    //     const currentInput = event.target;
    //     let currentValue = parseInt(currentInput.value) || 0;

    //     if (currentValue < 0) {
    //         currentValue = 0;
    //     } else if (currentValue > 100) {
    //         currentValue = 100;
    //     }

    //     currentInput.value = currentValue;

    //     const remainingInputs = percentageInputs.filter(input => input !== currentInput);
    //     const remainingTotal = 100 - currentValue;
    //     const remainingCount = remainingInputs.length;

    //     if (remainingCount > 0) {
    //         const remainingValue = Math.floor(remainingTotal / remainingCount);
    //         const extra = remainingTotal % remainingCount;

    //         remainingInputs.forEach((input, index) => {
    //             input.value = remainingValue + (index < extra ? 1 : 0);
    //         });
    //     }
    // };

    initializeStaticInputs();

    document.querySelectorAll('.patient-group').forEach((button) => {
        button.addEventListener('click', addDynamicRow);
    });

    // const percentageInputs = document.querySelectorAll('.percentage-input');
    // attachInputListeners(percentageInputs);
};

dynamicInputs();


// let counter = 1;

// const dynamicInputs = () => {
//     const filterInput = document.querySelectorAll('.filter-input');
//     const percentageInput = document.querySelectorAll('.percentage-input');
//     const descInput = document.querySelectorAll('.desc-input');

//     patientGroup.forEach((patient) => {
//         patient.addEventListener('click', () => {
//             const existingRows = filterRowWrapper.querySelectorAll('.filter-row').length;
    
//             if (existingRows < 5) {
//                 // Create a fresh copy of the initial row
//                 const newRow = filterRowTwo.cloneNode(true);
              
//                 const newInputsRow = newRow.querySelectorAll('input[type="text"], input[type="number"]');
            
//                 newInputsRow.forEach((input) => {
//                     input.value = '';
//                 });
               
//                 filterRowWrapper.appendChild(newRow);   
//             }
//         });
//         counter++; 
//     });

//     filterInput.forEach((input) => {
//         input.name = `patient_group[${counter}]`;
//     });
//     percentageInput.forEach((input) => {
//         input.name = `population_percentage[${counter}]`;
//     });
//     descInput.forEach((input) => {
//         input.name = `description[${counter}]`;
//     });

//      console.log(filterInput)
// }

// dynamicInputs();


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

// calculate.addEventListener('click', (event) => {
//     event.preventDefault();
//     fieldset.disabled = false;
//     console.log(fieldset)
// })


// percentageInputs2.forEach(input => {
//     input.addEventListener('input', () => {

//         let currentValue = parseInt(input.value);

//         if (currentValue < 0) {
//             currentValue = 0;
//         } else if (currentValue > 100) {
//             currentValue = 100;
//         }

//         input.value = currentValue;

//         const inputArray = Array.from(percentageInputs2);
//         const secondInput = inputArray.find(second => second !== input);
//         const secondValue = 100 - currentValue;
        
//        secondInput.value = secondValue;
//     });
// });


// filterInput.forEach((filter, index) => {
//     filter.addEventListener('keyup', () => {
//         if (index === 0 && filter.value !== null && filter.value !== '' && filter.value !== undefined) {
//             filterInput[1].value = 'Other';
//         }
//     })
// })

// filterInput2.forEach((filter, index) => {
//     filter.addEventListener('keyup', () => {
//         if (index === 0 && filter.value !== null && filter.value !== '' && filter.value !== undefined) {
//             filterInput2[1].value = 'Other';
//         }
//     })
// })

// patientGroup.forEach((patient) => {
//     patient.addEventListener('click', () => {
//         const existingRows = filterRowWrapper.querySelectorAll('.filter-row').length;

//         if (existingRows < 5) {
//             const firstFilterRow = filterRow[0]; 

//             filterRowWrapper.appendChild(firstFilterRow.cloneNode(true));
//         } 
//     });
// });

// patientGroup2.forEach((patient) => {
//     patient.addEventListener('click', () => {
//         const existingRows = filterRowWrapper2.querySelectorAll('.filter-row').length;

//         if (existingRows < 3) {
//             const firstFilterRow = filterRow[0]; 

//             filterRowWrapper2.appendChild(firstFilterRow.cloneNode(true));
//         } 
//     });
// });




