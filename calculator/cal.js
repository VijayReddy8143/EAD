let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    currentOperand += number.toString();
    updateDisplay();git remote add origin <your-repo-url>

}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    if (operation) {
        displayElement.innerText = `${previousOperand} ${operation} ${currentOperand}`;
    } else {
        displayElement.innerText = currentOperand || previousOperand || '0';
    }
}

function erase() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}
