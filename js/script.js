// /* Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

// "use strict";

// document.addEventListener("DOMContentLoaded", () => {
//   const movieDB = {
//     movies: [
//       "логан",
//       "лига справедливости",
//       "ла-ла лэнд",
//       "одержимость",
//       "скотт Пилигрим против...",
//     ],
//   };

//   const adv = document.querySelectorAll(".promo__adv img"),
//     addForm = document.querySelector("form.add"),
//     addInput = addForm.querySelector(".adding__input"),
//     checkbox = addForm.querySelector('[type = "checkbox"]');

//   const Sort = (arr) => {
//     arr.sort();
//   };

//   const deleteAdv = (arr) => {
//     arr.forEach((item) => {
//       item.remove();
//     });
//   };

//   deleteAdv(adv);

//   showMovisDinamic();
//   togglePromo();

//   addForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let addedFilm = addInput.value.toLowerCase();
//     if (addedFilm) {
//       if (addedFilm.length < 21) {
//         movieDB.movies.push(addedFilm);
//       } else {
//         movieDB.movies.push(addedFilm.slice(0, 22) + "...");
//       }
//     }
//     if (checkbox.checked) {
//       console.log("Добавляем любимый фильм");
//     }
//     showMovisDinamic();
//     event.target.reset();
//   });

//   function showMovisDinamic() {
//     let list = document.querySelector(".promo__interactive-list");
//     list.innerHTML = "";
//     Sort(movieDB.movies);
//     movieDB.movies.forEach((film, i) => {
//       list.innerHTML += `<li class="promo__interactive-item">
//       ${i + 1}) ${film}
//         <div class="delete"></div>
//       </li>`;
//     });
//     document.querySelectorAll(".delete").forEach((element, i) => {
//       element.addEventListener("click", () => {
//         let div = element.parentElement;
//         movieDB.movies.splice(i, 1);
//         showMovisDinamic();
//       });
//     });
//   }

//   function togglePromo() {
//     document.querySelector(".promo__genre").textContent = "ДРАМА";
//     document.querySelector(".promo__bg").style.cssText =
//       "background: url(./img/bg.jpg) center center/cover no-repeat;";
//   }
// });
