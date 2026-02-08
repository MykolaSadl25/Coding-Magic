const userBtnEl = document.querySelectorAll('.btn_rsp');
const compBtnEl = document.querySelector('.comp_btn');
const whowinEl = document.querySelector('.whowin_p');
const winCounterEl = document.querySelector('.winCounter');
const loseCounterEl = document.querySelector('.loseCounter');

const changeCounter = () => {
  winCounterEl.textContent = ` 
Ви - ${winCount}`;
loseCounterEl.textContent = `Комп’ютер - ${loseCount}`
};

let userChoice = '';
userBtnEl.forEach(e => {
  e.addEventListener('click', e => {
    userChoice = e.currentTarget.dataset.value;
  });
});

const compVar = ['rock', 'scissors', 'paper'];
let winCount = 0;
let loseCount = 0;

compBtnEl.addEventListener('click', e => {
  let compChoice = compVar[Math.floor(Math.random() * compVar.length)];
  console.log(compChoice);

  switch (userChoice) {
    case 'rock':
      if (compChoice !== 'paper') {
        if (compChoice == userChoice) {
          whowinEl.textContent = 'нічия';
          
        } else {
          whowinEl.textContent = 'Ви виграли раунд!';
          winCount = winCount + 1;
        }
      } else {
        whowinEl.textContent = 'Комп’ютер виграв раунд!';
        loseCount = loseCount + 1;
      }
      userChoice = '';
      changeCounter();
      break;
    case 'scissors':
      if (compChoice !== 'rock') {
        if (compChoice == userChoice) {
          whowinEl.textContent = 'нічия';
        } else {
          whowinEl.textContent = 'Ви виграли раунд!';
          winCount = winCount + 1;
        }
      } else {
        whowinEl.textContent = 'Комп’ютер виграв раунд!';
        loseCount = loseCount + 1;
      }
      userChoice = '';
      changeCounter();

      break;

    case 'paper':
      if (compChoice !== 'scissors') {
        if (compChoice == userChoice) {
          whowinEl.textContent = 'нічия';
        } else {
          whowinEl.textContent = 'Ви виграли раунд!';
          winCount = winCount + 1;
        }
      } else {
        whowinEl.textContent = 'Комп’ютер виграв раунд!';
        loseCount = loseCount + 1;
      }
      userChoice = '';
      changeCounter();
      break;

    default:
      whowinEl.textContent = 'Спочатку зробіть ваш вибор';
      break;
  }

  if (whowinEl.textContent == "Комп’ютер виграв раунд!") {
    whowinEl.style.color = "red"
  } else if (whowinEl.textContent == "Ви виграли раунд!") {
    whowinEl.style.color = "green"

  }
  else {
    whowinEl.style.color = "orange"
    
  }
  
});