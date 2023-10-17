Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

window.addEventListener('DOMContentLoaded',() => {
  const header = document.querySelector('.header');
  const formAbout = document.querySelector('.form');
  const formReg = document.querySelector('.curse-item__form');
  const aside = document.querySelector('.aside');
  const partners = document.querySelector('.basis__partners');
  const accordion = document.querySelector('.accordion');
  const protectionList = document.querySelector('.accordion__protection');
  const services = document.querySelector('.basis__services-content');

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

    function showTabContent (i= 0) {
      tabContent[i].style.display = 'block';
      tabs[i].classList.add('active1');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
     const target = event.target;

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

  if(accordion) {
    let accParent = document.querySelector('.accordion__container');

    accParent.addEventListener('click', (event) => {
      const target = event.target;
      if(target && target.classList.contains('button__accordion')) {
        const list = target.nextElementSibling;
        if (list.style.display === 'block') {
          list.style.display = 'none';
          target.classList.remove('rotate');
        } else {
          list.style.display = 'block';
          target.classList.add('rotate');
        }
      }
    })
  }

  if(protectionList) {
    let accordionButton = document.querySelector('.protection__accordion');
    let accordionPanel = document.querySelector('.protection__panel');

    accordionButton.addEventListener('click', function() {
      if( accordionPanel.style.display ===  'block') {
        accordionPanel.style.display = 'none';
        accordionButton.classList.remove('rotate');
      } else {
        accordionPanel.style.display = 'block';
        accordionButton.classList.add('rotate');
      }
    });
  }

  if(services) {
    const servicesList = document.querySelector('.services__accordion');
    let accordionPanel = document.querySelector('.protection__panel');

    servicesList.addEventListener('click', () => {
      if( accordionPanel.style.display ===  'block') {
        accordionPanel.style.display = 'none';
        servicesList.classList.remove('rotate');
      } else {
        accordionPanel.style.display = 'block';
        servicesList.classList.add('rotate');
      }
    })
  }

})











