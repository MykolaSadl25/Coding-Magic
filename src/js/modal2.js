const modal2El = document.querySelector('.modal2');
const closeBtn2El = document.querySelector('.modal2_close_btn');
const openBtn2El = document.querySelector('.openBtn2');

closeBtn2El.addEventListener('click', () => {
  modal2El.style.visibility = 'hidden';
  overlayEl.style.visibility = 'hidden';
});
