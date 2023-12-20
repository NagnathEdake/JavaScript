// Object Literals


const mySym = Symbol("Key1");
const jsUser = {
    name: "Nagnath",
    "full name": "Nagnath Ravindra Edake",
    [mySym]: "myKey1",
    Age: 21,
    location: "Solapur",
    email: "nagnath817@gmail.com",
    isLoggedIn: false,
    LastDayLogin: ["Monday", "Saturday"]
};


// console.log(jsUser.email);
// console.log(jsUser["email"]);


// // console.log(jsUser.full name);//that is wrong method.
// console.log(jsUser["full name"]);


// // console.log(typeof jsUser.mySym);//that not correct method 
// console.log(typeof jsUser[mySym]);
// console.log(jsUser[mySym]);


jsUser.email = "edake81@gmail.com";
// Object.freeze(jsUser);//when you apply this method you can't change the value.
jsUser.email = "home@nath.com";

// console.log(jsUser);



jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log("Hello Js User");
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
