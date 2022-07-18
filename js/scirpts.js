"use strict";
const personalMovieDB = {
  count: null,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
      console.log("toggled to false");
    } else {
      this.privat = true;
      console.log("toggled to true");
    }
  },

  start: function () {
    while (this.count === null || this.count === "" || isNaN(this.count)) {
      this.count = prompt("Сколько фильмов вы посмотрели?");
    }
    this.count = +this.count;
  },

  showMyDB: () => {
    // стрелочная функция со this не работает
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("Приватнный.");
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let anser = prompt(`Ваш любимый жанр под номером ${i}:`);
      if (anser === "" || anser == null) {
        alert("Пусто. Введите жанр.");
        i--;
      } else {
        this.genres[i - 1] = anser;
      }
    }
    this.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },

  rememberMyFilms: function () {
    for (let i = 0; i < this.count; i++) {
      let filmName = prompt("Один из последних просмотренных фильмов?").toU;
      let filmGrade = prompt("На сколько оцените его?");

      if (
        (filmName === "" || filmName.length > 50 || filmName == null) &&
        (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
      ) {
        alert("Не правильный формат. Попробуйте еще раз.");
        i--;
        continue;
      } else {
        personalMovieDB.movies[filmName] = filmGrade;
      }
    }
  },

  detectPersonalLevel: function () {
    switch (true) {
      case this.count > 0 && this.count <= 10:
        alert("Мало");
        break;
      case this.count > 10 && this.count < 30:
        alert("Норм");
        break;
      case this.count >= 30:
        alert("Хорош");
        break;
      case this.count == 0:
      default:
        alert("error");
        break;
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();

// rememberMyFilmsWhile();
// rememberMyFilmsDoWhile();
// function rememberMyFilmsWhile() {
//   while (numberOfFilms > 0) {
//     let filmName = prompt("Один из последних просмотренных фильмов?");
//     let filmGrade = prompt("На сколько оцените его?");

//     if (
//       (filmName === "" || filmName.length > 50 || filmName == null) &&
//       (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
//     ) {
//       alert("Не правильный формат. Попробуйте еще раз.");
//       continue;
//     } else {
//       personalMovieDB.movies[filmName] = filmGrade;
//       numberOfFilms--;
//     }
//   }
// }

// function rememberMyFilmsDoWhile() {
//   do {
//     let filmName = prompt("Один из последних просмотренных фильмов?");
//     let filmGrade = prompt("На сколько оцените его?");

//     if (
//       (filmName === "" || filmName.length > 50 || filmName == null) &&
//       (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
//     ) {
//       alert("Не правильный формат. Попробуйте еще раз.");
//       continue;
//     } else {
//       personalMovieDB.movies[filmName] = filmGrade;
//       numberOfFilms--;
//     }
//   } while (numberOfFilms > 0);
// }
