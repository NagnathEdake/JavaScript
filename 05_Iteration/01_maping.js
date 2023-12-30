const map = new Map();
map.set('IN' , 'India');
map.set('USA' , 'United states of America');
map.set('FR' , 'France');

// console.log(map);

for (const[key , value] of map) {
    console.log(key , ':-' ,value);
}

/******************************************** */
