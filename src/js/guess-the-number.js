


const inputGuess = document.querySelector(".quess__input");
const btnGuess = document.querySelector(".quess__button");
const answerText = document.querySelector(".quess__answer");



let randomNumber = Math.floor(Math.random() * 11); 
console.log("Загадане число:", randomNumber);

btnGuess.addEventListener("click", (e) => {
    e.preventDefault();
    
    const userValue = inputGuess.value;
    const userNumber = Number(userValue);

    answerText.style.display = "flex";

    if (userValue === "") {
        answerText.style.color = "grey";
        answerText.textContent = 'Тут порожньо';
    } else if (isNaN(userNumber)) {
        answerText.style.color = "gray";
        answerText.textContent = 'Це не число';
    } else if (userNumber < 0 || userNumber > 10) {
        answerText.style.color = "gray";
        answerText.textContent = 'Число має бути від 0 до 10';
    } else if (userNumber === randomNumber) {
        answerText.style.color = "#039900";
        answerText.innerHTML = `Вітаю, ви вгадали число! <span class="quess__span"> ${randomNumber} </span>`;

    } else {
        answerText.style.color = "#900";
        answerText.innerHTML = `Не вгадали! Спробуйте ще раз.`;
    }
});