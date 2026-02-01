const form = document.querySelector(".time-calc__form")
const input = document.querySelector(".time-calc__input")
let days = document.querySelector(".time-calc__days")
let hours = document.querySelector(".time-calc__hours")
let minutes = document.querySelector(".time-calc__minutes")
form.addEventListener("submit", (e) => {
    
    if (isNaN(input.value) || input.value < 0) {
        e.preventDefault()
        return input.value = "";
    }
    e.preventDefault()
    let d = Math.floor(input.value / 1440); 
    let h = Math.floor((input.value % 1440) / 60);
    let m = Math.floor(input.value % 60);

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;

})