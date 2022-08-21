/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
    "Кин-дза-дза",
    "Я добавлен",
  ],
};

// deleteAllAdv();
togglePromoGenre();
togglePromoBg();
// showMovis();
showMovisDinamic();

const adv = document.querySelectorAll(".promo__adv img");

adv.forEach((item) => {
  item.remove();
});
// function deleteAllAdv() {
//   document.querySelector(".promo__adv").remove();
//   let adv = document.querySelector(".promo__adv");
//   while (adv.firstChild) {
//     adv.firstChild.remove();
//   }
// }

function togglePromoGenre() {
  document.querySelector(".promo__genre").textContent = "ДРАМА";
}

function togglePromoBg() {
  document.querySelector(".promo__bg").style.cssText =
    "background: url(./img/bg.jpg) center center/cover no-repeat;";
}

// function showMovis() {
//   let items = document.querySelectorAll(".promo__interactive-item");
//   console.log(items);
//   for (let i = 0; i < movieDB.movies.length; i++) {
//     items[i].innerHTML = `${i + 1}) ${movieDB.movies.sort()[i]}`;
//   }
// }

function showMovisDinamic() {
  let list = document.querySelector(".promo__interactive-list");
  let listItem;
  list.innerHTML = "";
  movieDB.movies.sort();
  movieDB.movies.forEach((film, i) => {
    list.innerHTML += `<li class="promo__interactive-item">
    ${i + 1}) ${film}
      <div class="delete"></div>
    </li>`;
  });
}
