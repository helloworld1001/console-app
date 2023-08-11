'use strict';

// 1

let numberOfFilms;


function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    }
}

start();

//2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//3

function rememberMyMovies () {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов');
    const b = prompt('Ваша оценка');
    if (a != null && b != null && a.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
}

rememberMyMovies();



function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Классический пользователь')
} else if (personalMovieDB.count > 30) {
    alert('Классический пользователь')
} else {
    alert('Произошла ошибка')
}
}

3
detectPersonalLevel();


function checkStatus() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}

checkStatus();

function writeYourGengres () {
    for (let i = 1;  i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }

    console.log(personalMovieDB.genres);
}

writeYourGengres();