Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

window.addEventListener('DOMContentLoaded',() => {
  const header = document.querySelector('.header');
  const formAbout = document.querySelector('.form');
  const formReg = document.querySelector('.curse-item__form');
  const aside = document.querySelector('.aside');
  const partners = document.querySelector('.basis__partners');
  const accordion =document.querySelector('.accordion');

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
    const closeMenuSubstrate = document.querySelector('.header__mob-menu');
    const headerMenuMob = document.querySelector('.header__mob-item');


    window.onscroll = function() {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if(scrolled > windowHeight / 2){
        headerNav.style.opacity = '0.6';
      } else {
        headerNav.style.opacity = '1';
      }
    };

    headerBurger.addEventListener('click', function () {
      headerMob.classList.toggle('show');
      if (document.documentElement.clientWidth < 1024) {
        headerMenuMob.classList.remove('hide');
        headerMenuMob.classList.add('show');
      }

    } )

    closeMenuSubstrate.addEventListener('click', function () {
      headerMob.classList.toggle('show');
    })

  }

  if(formAbout) {
    handleForm(formAbout)
  }

  if(formReg) {
    handleForm(formReg);
  }

  if(aside) {
    const tabs = document.querySelectorAll('.nav-bar__item');
    const tabContent = document.querySelectorAll('.tabs__content');
    const tabsParent = document.querySelector('.nav-bar');
    const title = document.getElementById('title');

    function hideTabContent () {
      tabContent.forEach(elem => {
        elem.style.display = 'none';
      });

      tabs.forEach(tab => {
        tab.classList.remove('active1');
      })
    }

    function showTabContent (i= 20) {
      tabContent[i].style.display = 'block';
      tabs[i].classList.add('active1');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
     const target = event.target;
     console.log(target)

      if(target && target.classList.contains('nav-bar__item')) {
        tabs.forEach((elem,i) => {
          if(target === elem) {
            hideTabContent();
            showTabContent(i);
            title.textContent= target.textContent;
          }
        })
      }
    });
  }

  if (partners) {
    let blocks = document.querySelectorAll('.basis__partner-block');

    blocks.forEach((block, index) => {
      block.style.animationDelay = `${index * 0.5}s`;
    });
  }

  // if(accordion) {
  //   let acc = document.querySelectorAll('.button__accordion');
  //   let panel = document.querySelectorAll('.basis__panel');
  //
  //   acc.forEach(elem => {
  //     elem.addEventListener('click', () => {
  //
  //     })
  //   })
  // }
})











