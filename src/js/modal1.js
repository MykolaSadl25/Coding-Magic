const modal1El = document.querySelector(".modal1")
const closeBtnEl = document.querySelector(".modal_close_btn")
const openBtnEl = document.querySelector(".temperaryOpenBtn")
const textUserEl = document.querySelector(".temperaryTextUser")
const inputNameEl = document.querySelector(".your_name")
const saveNameEl = document.querySelector(".save_name_btn")
const overlayEl = document.querySelector(".modal_overlay")


document.addEventListener("DOMContentLoaded", () => {
    modal1El.style.visibility = "visible"
    overlayEl.style.visibility = "visible"
})

closeBtnEl.addEventListener("click", () => {
    modal1El.style.visibility = "hidden"
    overlayEl.style.visibility = "hidden"
})


saveNameEl.addEventListener("click", () => {
    if (inputNameEl.value == "") {
        inputNameEl.classList.add("your_name_wrong")
        return
    }
    textUserEl.textContent = inputNameEl.value
    modal1El.style.visibility = "hidden"
    overlayEl.style.visibility = "hidden"

})
