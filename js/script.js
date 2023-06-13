'use strict';

// 1

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

//2


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//3

let a = prompt('Последний просмотренный фильм'),
    b = +prompt('Ваша оценка'),
    c = prompt('Последний просмотренный фильм'),
    d = prompt('Последний просмотренный фильм');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);