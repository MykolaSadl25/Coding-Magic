
const inputs = document.querySelectorAll('.calculator__input'); 
const buttons = document.querySelectorAll('.calculator__button');
const equalBtn = document.querySelector('.calculator__equals');
const resultInput = document.querySelector('.calculator__input--result');

let currentOperation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperation = button.textContent;
    });
});

equalBtn.addEventListener('click', () => {
    const num1 = parseFloat(inputs[0].value);
    const num2 = parseFloat(inputs[1].value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Введите оба числа!');
        return;
    }
    if (!currentOperation) {
        alert('Оберіть дію');
        return;
    }

    let result = 0;


    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Ділення на 0 неможливе');
                return;
            }
            result = num1 / num2;
            break;
    }
    resultInput.value = result;
});