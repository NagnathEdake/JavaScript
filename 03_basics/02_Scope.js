function One() {

    const userName = "Radhesham";

    function Two() {
        const userID = 1234;

        console.log("User Name :",userName);
        console.log("User Id :",userID);
    }
    // console.log(userID);//That is child function.
    // Two();
}

// One();




if(true){
    const User = "Murlidhar";
    if(User === "Murlidhar"){
        const website = " YouTube";
        console.log(User + website);
    }

    // console.log(website);
}


// console.log(User);



/********************************************************* */

console.log(addOne(5));//access before & After
function addOne(num) {
    return num + 1;
}
console.log(addOne(5));


// console.log(addTwo(5));//can't access before 
const addTwo = function (num){
    return num + 2;
}
console.log(addTwo(5));
