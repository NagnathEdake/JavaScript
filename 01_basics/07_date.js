//Dates

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toDateString());
// console.log(myDate.getFullYear());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());


let myCreatedDate = new Date(2023 , 0 , 23);
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);//   In miliSeconds
console.log(Math.floor(myTimeStamp/1000));//   In Seconds
console.log(Math.floor(myTimeStamp/1000 *60));