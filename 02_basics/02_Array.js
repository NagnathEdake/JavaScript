const marvelHeros = ["Thor", "Iron", "Spide"];
const dcHeros = ["superan", "flash", "batman"];

// marvelHeros.push(dcHeros);


// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);//that is 2d array 


// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);


// const allNewHeros = [...marvelHeros , ...dcHeros];
// console.log(allNewHeros);

// const anotherArray = [1, 2, 4, 5, [3, 5, 7], 4, 3, 6, [2, 4, 6, [9, 8, 5]], 5, 0];

// const newAnotherArray = anotherArray.flat(Infinity);// it is converting in one single line array.

// console.log(newAnotherArray);


/************************************** */

// console.log(Array.isArray("Nagnath"));

// console.log(Array.from("Nagnath"));//this method convert in array.

// console.log(Array.from({name : "Nagnath"}));//is show empty.



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));