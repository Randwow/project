"use strict";
// let number = 5; 


// const myArray = {
//     age: 100,
//     firstName: "Bill",
//     lastName: "Mat"
// };
// myArray.age = 55;
// console.log(4/0);
// console.log('string ' / 9);
// console.log(myArray);
// let arr = ['Nick ', 25, true]; 
// console.log(arr.toString);

// alert(arr);
// let result = confirm("You are here");
// console.log(result);
// let answer = +prompt("Are you 18 ?","18");
// myArray.age = answer;
// console.log(myArray);
// console.log(typeof(+answer));
// answer = +answer;
// console.log(typeof(answer));
// let category = "lol";
// console.log(`https://google.com/${category}/5`);

// let user = "Nichita";
// alert(`привет,${user}!`);
// console.log(5%2);
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм вы смотрели',''),
      b = prompt('На сколько оцените его ?',''),
      c = prompt('Какой последний фильм вы смотрели',''),
      d = prompt('На сколько оцените его ?','');
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB);