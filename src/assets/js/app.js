window.addEventListener('DOMContentLoaded',() => {
  const header = document.querySelector('.header');

  if(header) {
    const headerTop = document.querySelector('.header__top');
    const headerNav = document.querySelector('.header__nav');
    window.onscroll = function() {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if(scrolled > windowHeight / 2){
        headerNav.style.opacity = '0';
      } else {
        headerNav.style.opacity = '1';
      }
    };

  }

})









