// =============== SWIPER JS ===============
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// =============== TOGGLE NAV MENU ===============
const menubtn = document.querySelector('#menu-btn');
const closebtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menubtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menubtn.style.display = 'none';
  closebtn.style.display = 'inline-block';
});

closebtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closebtn.style.display = 'none';
  menubtn.style.display = 'inline-block';
});

const navitems = document.querySelectorAll('nav ul li');

const removeActive = () => {
  navitems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  });
}

// add active class to clicked nav item
navitems.forEach(item => {
  const link = item.querySelector('a');

  link.addEventListener('click', () => {
    removeActive();
    link.classList.add('active');
  });
});


// =============== TOGGLE FAQS ===============
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.icon i');

    if (icon.className == "bx bx-plus") {
      icon.className = "bx bx-minus";
    } else {
      icon.className = "bx bx-plus";
    }

  });
});


