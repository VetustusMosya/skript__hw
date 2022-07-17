"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
  }
}

// start();
// rememberMyFilms();
// rememberMyFilmsWhile();
// rememberMyFilmsDoWhile();
// detectPersonalLevel();
writeYourGenres();
showMyDB();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  } else {
    alert("Приватнный.");
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
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
}

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
