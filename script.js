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
            button = document.createElement('button');
            button.setAttribute('id', counter);
            button.textContent = button.id;
            row.appendChild(button);
            counter++;
        }
    }
}

function assignValues() {
    const buttons = document.querySelectorAll('button');
    let counter = 1;
    buttons.forEach((button) => {
        
        switch (button.id) {
            case "1":
                button.setAttribute('id', 'Add');
                break;
            case "2":
                button.setAttribute('id', 'Subtract');
                break;
            case "3":
                button.setAttribute('id', 'Multiply');
                break;
            case "4":
                button.setAttribute('id', 'Divide');
                break;
            case "5":
            case "6":
            case "7":
            case "9":
            case "10":
            case "11":
            case "13":
            case "14":
            case "15":
                button.setAttribute('id', counter);
                button.classList.add('number');
                counter++;
                break;
            case "8":
                button.setAttribute('id', '0');
                button.classList.add('number');
                break;
            case "12":
                button.setAttribute('id', 'Clear');
                break;
            case "16":
                button.setAttribute('id', 'equals');
                break;
        }
        button.textContent = button.id;
    });
}

generateButtons();
assignValues();

function getNumber (array) {
    const buttons = document.querySelectorAll('.number');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            array.push(button.id);
            console.log(array);
            string = array.join('');
            console.log(string);
        });
    });
};

let array = [];
array = getNumber(array);


