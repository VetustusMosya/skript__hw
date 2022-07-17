"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

console.log(personalMovieDB);

// while (numberOfFilms > 0) {
//   let filmName = prompt("Один из последних просмотренных фильмов?");
//   let filmGrade = prompt("На сколько оцените его?");

//   if (
//     (filmName === "" || filmName.length > 50 || filmName == null) &&
//     (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
//   ) {
//     alert("Не правильный формат. Попробуйте еще раз.");
//     continue;
//   } else {
//     personalMovieDB.movies[filmName] = filmGrade;
//     numberOfFilms--;
//   }
// }

// do {
//   let filmName = prompt("Один из последних просмотренных фильмов?");
//   let filmGrade = prompt("На сколько оцените его?");

//   if (
//     (filmName === "" || filmName.length > 50 || filmName == null) &&
//     (filmGrade === "" || filmGrade.length > 50 || filmGrade == null)
//   ) {
//     alert("Не правильный формат. Попробуйте еще раз.");
//     continue;
//   } else {
//     personalMovieDB.movies[filmName] = filmGrade;
//     numberOfFilms--;
//   }
// } while (numberOfFilms > 0);
