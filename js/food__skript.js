"use strict";
window.addEventListener("DOMContentLoaded", () => {
  // ! TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTibeContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTibeContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTibeContent();
          showTabContent(i);
        }
      });
    }
  });

  // ! Timer
  const deadline = "2022-11-31";

  function getTimeRemaning(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaning(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);

  // ! POpUP

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 9999);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  // ! Classes 

  class MenuBox {
    constructor(title, descr, cost, img, parentSelector, ...classes) {
      this.title = title;
      this.descr = descr;
      this.cost = cost;
      this.img = img;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 2.6;
      this.changeToUAH();
      this.classes = classes;
    }

    changeToUAH() {
      this.cost = Math.round(this.cost * this.transfer);
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
      <img src=${this.img} alt="vegy" />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">
      ${this.descr}
      </div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.cost}</span> руб/день</div>
      </div>`;
      this.parent.append(element);
    }
  }

  new MenuBox('Меню "Фитнес"',
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
  свежих овощей и фруктов. Продукт активных и здоровых людей. Это
  абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    9,
    "img/tabs/vegy.jpg",
    '.menu .container',
    'menu__item'
  )
    .render();

  new MenuBox('Меню “Премиум”',
    `В меню “Премиум” мы используем не только красивый дизайн упаковки,
  но и качественное исполнение блюд. Красная рыба, морепродукты,
  фрукты - ресторанное меню без похода в ресторан!`,
    14,
    'img/tabs/elite.jpg',
    '.menu .container',
    'menu__item'
  )
    .render();

  new MenuBox('Меню "Постное"',
    `Меню “Постное” - это тщательный подбор ингредиентов: полное
  отсутствие продуктов животного происхождения, молоко из миндаля,
  овса, кокоса или гречки, правильное количество белков за счет тофу
  и импортных вегетарианских стейков.`,
    21,
    'img/tabs/post.jpg',
    '.menu .container',
    'menu__item'
  )
    .render();


  // ! Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: './img/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });

      fetch('server.php', {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
        // php без заголовков
        body: JSON.stringify(object)
      })
        .then(data => data.text())
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        });

      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');
      // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      // request.send(json);

      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     statusMessage.remove();
      //     form.reset();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }
});
