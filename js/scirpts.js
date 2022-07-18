"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  toggleVisibleMyDB: function () {
    if (this.privat === false) {
      this.privat = true;
      console.log("toggled to true");
    } else {
      this.privat = false;
      console.log("toggled to false");
    }
  },

  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    }
  },

  showMyDB: function () {
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
        continue;
      } else {
        this.genres[i - 1] = anser;
      }
    }
    this.genres.forEach(function (item, i) {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },

  rememberMyFilms: function () {
    for (let i = 0; i < numberOfFilms; i++) {
      let filmName = prompt("Один из последних просмотренных фильмов?");
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
      case numberOfFilms > 0 && numberOfFilms <= 10:
        alert("Мало");
        break;
      case numberOfFilms > 10 && numberOfFilms < 30:
        alert("Норм");
        break;
      case numberOfFilms >= 30:
        alert("Хорош");
        break;
      case numberOfFilms == 0:
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
personalMovieDB.showMyDB();

// rememberMyFilmsWhile();
// rememberMyFilmsDoWhile();

function rememberMyFilmsWhile() {
  while (numberOfFilms > 0) {
    let filmName = prompt("Один из последних просмотренных фильмов?");
    let filmGrade = prompt("На сколько оцените его?");

    if (
      (filmName === "" || filmName.length > 50 || filmName == null) &&
      (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
    ) {
      alert("Не правильный формат. Попробуйте еще раз.");
      continue;
    } else {
      personalMovieDB.movies[filmName] = filmGrade;
      numberOfFilms--;
    }
  }
}

function rememberMyFilmsDoWhile() {
  do {
    let filmName = prompt("Один из последних просмотренных фильмов?");
    let filmGrade = prompt("На сколько оцените его?");

    if (
      (filmName === "" || filmName.length > 50 || filmName == null) &&
      (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
    ) {
      alert("Не правильный формат. Попробуйте еще раз.");
      continue;
    } else {
      personalMovieDB.movies[filmName] = filmGrade;
      numberOfFilms--;
    }
  } while (numberOfFilms > 0);
}
