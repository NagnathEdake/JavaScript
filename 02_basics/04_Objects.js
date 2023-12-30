// const tinderuser = {};//that is non singleton object.
const tinderUser = new Object();//that is singleton object


tinderUser.id = "123abc";
tinderUser.name = "Sham";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "sham@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sham",
            lastName: "Shinde",
        }

    }
}


// console.log(regularUser.fullName.userFullName.firstName);



//**************************************************** */

// merge all objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };


// const obj3 = {obj1 , obj2};//that is not correct  method.

// const obj3 = Object.assign({}, obj1 , obj2);
const obj3 = { ...obj1, ...obj2 };//that is spred oprater.

// console.log(obj3);



const user = [
    {
        id: 1,
        email: "sham@gmail.com"
    },
    {
        id: 2,
        email: "sham@gmail.com"
    },
    {
        id: 3,
        email: "sham@gmail.com"
    },
    {
        id: 4,
        email: "sham@gmail.com"
    },
]

// console.log(user[1].id);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "Js",
    price: 999,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);  //that is one method let's check another way.
const {courseInstructor : Instructor} = course;//you can also destructure you object date

// console.log(courseInstructor);//that's can't access this data .
console.log(Instructor);
