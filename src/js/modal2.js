const modal2El = document.querySelector('.modal2');
const closeBtn2El = document.querySelector('.modal2_close_btn');
const openBtn2El = document.querySelector('.openBtn2');
const overlayEl2 = document.querySelector('.modal_overlay2');

closeBtn2El.addEventListener('click', () => {
  modal2El.style.visibility = 'hidden';
  overlayEl2.style.visibility = 'hidden';
});

overlayEl2.addEventListener('click', (event) => {
  if (event.target == overlayE2) {
    modal2El.style.visibility = 'hidden';
    overlayEl2.style.visibility = 'hidden';
  }
});
