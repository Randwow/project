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


// let numberOfFilms ;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ', '');
//     }
// }
//     start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Какой последний фильм вы смотрели',''),
//               b = prompt('На сколько оцените его ?','');
              
//               if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 console.log('done');
//                 personalMovieDB.movies[a] = b;
//               } else {
//                   console.log('error');
//                   i--;
//               }
//       }
// }
// rememberMyFilms();
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов ');
//     } else if(personalMovieDB.count >= 10 && personalMovieDB.count< 30){
//       console.log('Вы классический зритель ');
//     }else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман '); 
//     }else{
//         console.log('Ошибка');
//     }
// }
// detectPersonalLevel();
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i = 1; i <=3 ; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();
// const calc = (a, b) => a + b;
// console.log(calc(2,3));
const options = {
    name: 'Nichita',
    lastname: 'Macheev',
    Univ: 'UTM',
    Group: 'TI-197',
    DT: {
        course_one:'done',
        course_two:'done',
    }
}
console.log(Object.keys(options).length);
let number = Object.keys(options);
console.log(number);
const {course_one, course_two} = options.DT;
console.log(course_one);
// for (const key in options) {
//     if (typeof(options[key]) === 'object') {
//         for(let i in options[key])
//         console.log(`Название свойства ${i} и оно имеет значение ${options[key][i]}`); 
//     }else{
//         console.log(`Название свойства ${key} и оно имеет значение ${options[key] }`);
//     }
    
// }