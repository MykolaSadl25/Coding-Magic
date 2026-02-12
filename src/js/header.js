// const toggleBtn = document.getElementById("themeToggle");

// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

const slider = document.querySelector('.header-slider');
const circle = document.querySelector('.header-circle');
const image = document.querySelector('.header-img');

import sun from '../img/sun.png';
import moon from '../img/moon.png';


slider.addEventListener('click', () => {
    circle.classList.toggle('active')
    
    if (circle.classList.contains("active")) {
    circle.style.backgroundColor = 'gray';
    image.src = moon;
    }
  else {
    image.src = sun
    circle.style.backgroundColor = 'white';
  }
});
