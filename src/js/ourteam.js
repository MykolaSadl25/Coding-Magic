const listRef = document.querySelector(".team__list");
const itemRef = document.querySelectorAll(".team__item");
const btnLeftRef = document.querySelector(".team__btn-left");
const btnRightRef = document.querySelector(".team__btn-right");
const dotsRef = document.querySelectorAll(".team__dot");

//ArrowLeft
//ArrowRight

let index = 0;

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (index < itemRef.length - 1) {
      index += 1;
      // console.log(index);
      // console.log(itemRef.length-1);

      moveSlider();
      if (index === itemRef.length) {
        index = 0;
        moveSlider();
      }
    }
  }
  if (event.key === "ArrowLeft") {
    if (index > 0) {
      index -= 1;
      moveSlider();
    }
  }
});

btnRightRef.addEventListener("click", () => {
  if (index < itemRef.length - 1) {
    index += 1;
    moveSlider();
  }
});
btnLeftRef.addEventListener("click", () => {
  if (index > 0) {
    index -= 1;
    moveSlider();
  }
});
function moveSlider() {
  const update = -index * 100;
  listRef.style.transform = `translateX(${update}%)`;
  dotsRef.forEach(dot => dot.classList.remove("activeDot"));
  if(dotsRef[index]) {
    dotsRef[index].classList.add("activeDot");
  }
}
