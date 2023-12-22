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

console.log(loginUserMessage()); 
