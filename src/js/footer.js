const modal2El = document.querySelector(".modal2")
const inputRef = document.querySelector(".footer__input");
const btnRef = document.querySelector(".footer__btn");
const overlayEl = document.querySelector(".modal_overlay2")

btnRef.addEventListener("click",()=>{
    if (inputRef.value !== "" && inputRef.value.includes("@")) {
        modal2El.style.visibility = "visible"
        overlayEl.style.visibility = "visible"
    }
    inputRef.value = ""
})


