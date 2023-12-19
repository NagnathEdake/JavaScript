// Arrays 


const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["SuperMan", "BatMan", "IronMan"]
const arrays = new Array(1, 2, 3, 4, 5);
console.log(myArr[3]);


//Array methods
const myArray = [0, 1, 2, 3, 4, 5];

// myArray.push(6);//  added one number in array.
// myArray.pop(); // this method remove the last element.

// myArray.unshift(9);//added one number in array starting.
// myArray.shift(); // this method remove the strting element.

// console.log(myArray.indexOf(5));
// console.log(myArray.includes(9));// this method showing true or false
// console.log(myArray);

// const newArr = myArray.join(); //this method converting array format to string.
// console.log(newArr);


/********************************************** */
//method  slice() and splice()

console.log("A ", myArray);


const myarr1 = myArray.slice(1, 3);
console.log(myarr1);
console.log("B ", myArray);


const myarr2 = myArray.splice(1, 3);
console.log("C ",myArray);
console.log(myarr2);

