


window.addEventListener('DOMContentLoaded',() => {
  const header = document.querySelector('.header');
  const formAbout = document.querySelector('.form');

  function handleForm (formAbout) {
    formAbout.addEventListener('submit', function (event) {
      event.preventDefault();

      let controls = this.querySelectorAll('.form-control');
      let isValid = true;
      controls.forEach(control => {
        control.classList.remove('invalid-control');
        if (control.classList.contains('required') && !control.value) {
          control.classList.add('invalid-control');
          isValid = false;
        }
      });

      if (isValid) {
        showSuccessModal();
        controls.forEach(control => {
          control.value = '';
          control.checked = false;
        });
      }
    })
  }

  function showSuccessModal () {
    const popUp = document.querySelector('.pop-up');
    const close = document.querySelector('.pop-up__close');
    const popUpButton = document.querySelector('.pop-up__button');
    function openModal() {
      popUp.style.display = 'block';
    }

    function closeModal() {
      popUp.style.display = 'none';
    }

    close.addEventListener('click', function () {
      closeModal();
    })

    popUpButton.addEventListener('submit',function () {
      closeModal();
    })

    openModal();

  }


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
    handleForm(formAbout)
  }

})









