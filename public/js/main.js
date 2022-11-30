const hamburger = document.querySelector('#mobile-hamburger');
const navMenu = document.querySelector('#mobile-menu');
const navLink = document.querySelectorAll('.nav-link');

// handleOpen
hamburger.addEventListener('click', openMenu);
// handleClose on links
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function openMenu() {
  hamburger.classList.toggle('activeOpen');
  navMenu.classList.toggle('activeOpen');
}
function closeMenu() {
  hamburger.classList.remove('activeOpen');
  navMenu.classList.remove('activeOpen');
}

//Get the button
const nav = document.querySelector('#nav');
// const mybutton = document.querySelector("#scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  handleActiveLink();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = 'block';
    nav.classList.add('activeScroll');
  } else {
    // mybutton.style.display = 'none';
    nav.classList.remove('activeScroll');
  }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


// ***************** SIDEBAR
let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.side__nav--link');

function activeLink(li) {
  lists.forEach((item) => item.classList.remove('is-active-side'));
  li.classList.add('is-active-side');
}

function handleActiveLink() {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = (sec.offsetTop-(sec.offsetTop/6));
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[scroll-data='${id}']`);
      activeLink(target);
    }
  });
};