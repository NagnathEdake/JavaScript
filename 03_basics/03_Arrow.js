
const user = {
    userName: "Sham",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.userName = "Radhesham";
// user.welcomeMessage();

// console.log(this);


/***************************************** */


// function One (){
//     const userName = "RadheKarn";
//     console.log(this);
// }
// One();//it can't be work

// const Two = function (){
//     userName = "Jay Shriram";
//     console.log(this.userName);
// }
// Two();//that's work

// const Three = () => {
//     userName = "surya";
//     console.log(this);
// }
// Three();



// const addNum = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addNum(5 ,4));


const addNum = (num1, num2) =>  num1 + num2;

    console.log(addNum(5, 4));