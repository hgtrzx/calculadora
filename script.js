let currentInput = '';
let operation = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstNumber === '') {
        firstNumber = currentInput;
    } else {
        secondNumber = currentInput;
    }
    operation = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
    document.getElementById('display').value = '';
}

function calculate() {
    if (firstNumber === '' || currentInput === '') return;
    secondNumber = currentInput;
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        default:
            return;
    }
    document.getElementById('display').value = result;
    currentInput = result.toString();
    firstNumber = '';
    secondNumber = '';
    operation = '';
}
