const inputBigestEl = document.querySelectorAll(".biggest_number")
const theBigestNumber = document.querySelector(".the_bigest_number")
let numbers = ["","",""]
inputBigestEl.forEach((input) => {
    input.addEventListener("change", (e) => {
        
        numbers[input.dataset.index] = e.target.value

        
        //numbers.push(number.target.value)
        console.log(numbers);

        if (numbers[0] !== "" && numbers[1] !== "" && numbers[2] !== "") {
            numbers.sort((a, b) => b-a)
            theBigestNumber.textContent = `Найбільше число, яке ви ввели - ${numbers[0]}`
            
        }
        
        

    })
})
