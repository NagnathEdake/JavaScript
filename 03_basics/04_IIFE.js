// Immediately Invoked Function Expression (IIFE)


// function One(){
//     console.log('DB CONNECTED');
// }
// One();


(function One(){
    console.log('DB CONNECTED');
})();

(() =>{
    console.log('DB CONNECTED SECOND TIME');
})();


((name) =>{
    console.log(`DB CONNECTED ${name}`);
})('Hanuman')