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

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.toggle("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    // clearInterval(modalTimerId);
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // const modalTimerId = setTimeout(openModal, 3000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  // window.addEventListener("scroll", showModalByScroll);

  // ! Classes 

  class MenuBox {
    constructor(title, descr, cost, img ){
      this.title = title;
      this.descr = descr;
      this.cost = cost;
      this.img = img;
    }
  }
  
  const a1 = new MenuBox('Меню "Фитнес"',`Меню "Фитнес" - это новый подход к приготовлению блюд: больше
  свежих овощей и фруктов. Продукт активных и здоровых людей. Это
  абсолютно новый продукт с оптимальной ценой и высоким качеством!`,229, 'img/tabs/vegy.jpg'),
  a2 = new MenuBox('Меню “Премиум”',`В меню “Премиум” мы используем не только красивый дизайн упаковки,
  но и качественное исполнение блюд. Красная рыба, морепродукты,
  фрукты - ресторанное меню без похода в ресторан!`,550, 'img/tabs/elite.jpg'),
  a3 = new MenuBox('Меню "Постное"',`Меню “Постное” - это тщательный подбор ингредиентов: полное
  отсутствие продуктов животного происхождения, молоко из миндаля,
  овса, кокоса или гречки, правильное количество белков за счет тофу
  и импортных вегетарианских стейков.`,430, 'img/tabs/post.jpg');

  const arr = [a1, a2, a3],
        wrapper = document.querySelector('.menu__field .container');

  arr.forEach( item => {
    wrapper.innerHTML += `
    <div class="menu__item">
    <img src="${item.img}" alt="vegy" />
    <h3 class="menu__item-subtitle">${item.title}</h3>
    <div class="menu__item-descr">
    ${item.descr}
    </div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
      <div class="menu__item-cost">Цена:</div>
      <div class="menu__item-total"><span>${item.cost}</span> грн/день</div>
    </div>
    </div>`;
   });
});
