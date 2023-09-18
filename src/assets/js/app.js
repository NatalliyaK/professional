window.addEventListener('DOMContentLoaded',() => {
  const header = document.querySelector('.header');
  const formAbout = document.querySelector('.form');

  if(header) {
    const headerTop = document.querySelector('.header__top');
    const headerNav = document.querySelector('.header__nav');
    const headerBurger = document.querySelector('.header__burger');
    const headerMob = document.querySelector('.header__mob');
    const closeMenu = document.querySelector('.close');

    window.onscroll = function() {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if(scrolled > windowHeight / 2){
        headerNav.style.opacity = '0';
      } else {
        headerNav.style.opacity = '1';
      }
    };

    headerBurger.addEventListener('click', function () {
      headerMob.classList.toggle('show');
    } )

    closeMenu.addEventListener('click', function () {
      headerMob.classList.toggle('show');
    })


  }

  if(formAbout) {

  }
})









