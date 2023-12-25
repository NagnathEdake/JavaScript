// const addTwoNumbers=(number1 ,number2) => {
//     console.log(number1 + number2);
// }
// addTwoNumbers(37 ,45);


const addTwoNumbers = (number1, number2) => {
    let Result = number1 + number2;
    return Result;
}
Result = addTwoNumbers(37, 45);
// console.log("Result :", Result);



const tables = (number) => {
    for (let i = 1; i <= 10; i++) {
        console.log(number * i);
    }
}
// tables(13);



function loginUserMessage(userName) {
    if (userName === undefined) {
        console.log("Please Enter User Name?");
    }
    else {
        return `${userName} just logged in`;
    }
}

// console.log(loginUserMessage()); 


/******************************************************* */

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(4));//only one value can get it
//----------------------------------------------------------
//rust opareter
function calculateCart(...num2){
    return num2;
}
// console.log(calculateCart(200,100,500,300));//so many value can get in array.
//------------------------------------------------------------------------


const user = {
    Name : "Rohit",
    price : 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.Name} and price was ${anyObject.price}`);
}
// handleObject(user);

// handleObject({
//     Name : "Shantanu",
//     price : 200
// })//you can pass value direct in object

/*************************************************************** */


const myNewArray = [200 ,100 ,500 ,300];

function returnSecondValue (getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([400 , 600 , 750 ,1000]));//you can write direct array.

/******************************************** */

