const modal2El = document.querySelector(".modal2")
const closeBtn2El = document.querySelector(".modal2_close_btn")
const openBtn2El = document.querySelector(".temperaryOpenBtn2")



openBtn2El.addEventListener("click", () => {
    modal2El.style.display = "block"
})

closeBtn2El.addEventListener("click", () => {
    modal2El.style.display = "none"
})
