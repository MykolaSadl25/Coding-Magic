const modal2El = document.querySelector(".modal2")
const inputRef = document.querySelector(".footer__input");
const btnRef = document.querySelector(".footer__btn");

btnRef.addEventListener("click",()=>{
    if (inputRef.value !== "" && inputRef.value.includes("@")) {
        modal2El.style.display = "block"
    }
    inputRef.value = ""
})