
const input = document.querySelector('input');

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const calculated = document.querySelector('.operated');
const dot = document.querySelector('.dot');

//const appendNumber = 

operationButtons.forEach(operationBtn => {
    operationBtn.addEventListener('click', (e) => {
        //console.log('operation: ', operationBtn.textContent)
        const addBtn = e.target.textContent;
        input.value = addBtn;

        //const substracBtn = e.target.textContent;
        //input.value = 
        //operations definiton
        
    });
});


numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const number = e.target.textContent;
        input.value = number;

        
        const newNumber = number + newNumber;

        //concatenate numbers
        
        console.log(number);

        //const parseInt (number);

    });
});



// alert(input != null ? 'Van Elem': 'Nincs elem');

// const obj = {
//     name: 'Mana',
//     age: 30,
// };

// console.log('Mana object', obj);

// document.addEventListener('DOMContentLoaded', processInput);
// window.addEventListener('resize', (e) => console.log('Window resized.', e));