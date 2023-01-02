const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.main_menu nav ul');

// MyaMyaMya Time
const popupOpen = document.querySelector('.popup_open');
const popup = document.querySelector('.popup');
const dim = document.querySelector('.dim');
const popupoff = document.querySelector('.popup_off');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.main_menu nav ul li a').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
  })
);

// MyaMyaMya Time
popupOpen.addEventListener('click', () => {
  popup.classList.toggle('on');
  dim.classList.toggle('on');
});

popupoff.addEventListener('click', () => {
  popup.classList.remove('on');
  dim.classList.remove('on');
});
