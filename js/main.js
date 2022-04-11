const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');
  $menuToggle.addEventListener('click', () => {
    $menu.classList.toggle('menu_active');
  });

  const $menuClose = $menu.querySelector('.menu__close');
  $menuClose.addEventListener('click', () => {
    $menu.classList.remove('menu_active');
  });

  const $menuLinks = $menu.querySelectorAll('.menu__link');
  $menuLinks.forEach($link => {
    $link.addEventListener('click', () => {
      $menu.classList.toggle('menu_active');
    });
  });

  $menu.addEventListener('click', e => {
    if ($menu === e.target && $menu.classList.contains('menu_active')) {
      $menu.classList.remove('menu_active');
    }
  });
}

const swiper = new Swiper('.services__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },

  scrollbar: {
    el: '.services__scrollbar',
    dragSize: 120,
  },

  breakpoints: {
    1600: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      scrollbar: {
        dragSize: 410,
      },
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});

/**
 * Smooth scrolling to anchors
 */
const $anchors = document.querySelectorAll('a[href*="#"]');
$anchors.forEach($anchor => {
  $anchor.addEventListener('click', e => {
    e.preventDefault();

    const id = $anchor.getAttribute('href');
    if (id === '#') {
      return;
    }

    const $elem = document.querySelector(id);
    if ($elem) {
      const offsetTop = $elem.getBoundingClientRect().top;
      window.scrollBy({ top: (offsetTop), left: 0, behavior: 'smooth' });
    }
  });
});