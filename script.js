function add (num1, num2) {
    return (num1 + num2);
}

function subtract (num1, num2) {
    return (num1 - num2);
}

function multiply (num1, num2) {
    return (num1 * num2);
}

function divide (num1, num2) {
    return (num1 / num2);
}

function massMultiply (array) {
    return ( array.reduce((total,element) => total * element, 1))
}

function operate (operator, num1, num2) {
    switch (operator) {
        case 'add':
            return add(num1,num2);
        case 'subtract':
            return subtract(num1,num2);
        case 'multiply':
            return multiply(num1,num2);
        case 'divide':
            return divide(num1,num2);
    };
};

function generateButtons() {
    const calculator = document.querySelector('.calculator');
    let counter = 1;

    for (i=0;i<4;i++) {
        const row = document.createElement('div');
        row.classList.add('buttonrow');
        calculator.appendChild(row);

        for (j=0;j<4;j++) {
            const button = document.createElement('button');
            switch (counter) {
                case 1:
                    button.setAttribute('id', 'Add');
                    break;
                case 2:
                    button.setAttribute('id', 'Subtract');
                    break;
                case 3:
                    button.setAttribute('id', 'Multiply');
                    break;
                case 4:
                    button.setAttribute('id', 'Divide');
                    break;
                case 5:
                case 6:
                case 7:
                    button.setAttribute('id', (counter - 4));
                    button.classList.add('number');
                    break;
                case 9:
                case 10:
                case 11:
                    button.setAttribute('id', (counter - 5));
                    button.classList.add('number');
                    break;
                case 13:
                case 14:
                case 15:
                    button.setAttribute('id', (counter - 6));
                    button.classList.add('number');
                    break;
                case 8:
                    button.setAttribute('id', '0');
                    button.classList.add('number');
                    break;
                case 12:
                    button.setAttribute('id', 'Clear');
                    break;
                case 16:
                    button.setAttribute('id', 'equals');
                    break;
            }

            button.textContent = button.id;
            button.addEventListener('click', () => {
                button.classList.add('clicked');
            button.addEventListener('transitionend', () => {
                button.classList.remove('clicked');
            })
            })
            row.appendChild(button);
            counter++;
            console.log(counter);
        }
    }
}

function appendNumber(number) {
    if (display.textContent === '0' || resetFlag) {
        display.textContent = '';
        resetFlag = false;
    }
    display.textContent += number;
}

function clearDisplay() {
    display.textContent = '0';
}

function storeValue(operator) {
    if (storedNumber.length < 1) {
        storedNumber.push(parseInt(display.textContent));
        display.textContent = '0';
        operatorChoice = operator.toLowerCase();
        console.log(storedNumber);
        console.log(operatorChoice);
    } else if (storedNumber.length === 1 && operator === 'equals') {
        storedNumber.push(parseInt(display.textContent));
        display.textContent = operate(operatorChoice, storedNumber[0], storedNumber[1]);
        storedNumber = [];
        resetFlag = true;
    } else {
        console.log('Too many numbers! Press "equals"');
    }
    
}

generateButtons();

const display = document.querySelector('h1');
const buttons = document.querySelectorAll('.number');
const clear = document.querySelector('#Clear');
const addButton = document.querySelector('#Add');
const subtractButton = document.querySelector('#Subtract');
const multiplyButton = document.querySelector('#Multiply');
const divideButton = document.querySelector('#Divide');
const equals = document.querySelector('#equals');
const operatorArray = [addButton, subtractButton, multiplyButton, divideButton, equals];
let resetFlag = false;
let storedNumber = [];
let operatorChoice = ''; 

buttons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.id));
});

clear.addEventListener('click', () => clearDisplay());

operatorArray.forEach((operator) => {
    operator.addEventListener('click', () => storeValue(operator.id));
})



