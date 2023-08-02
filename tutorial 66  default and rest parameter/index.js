"use strict"

// function message(text = "hellow this is defolt prameter"){
//     console.log(`${text}`);
// }

// message();
// message("i love bangladesh");


//rest parameter
function sum(x, y , ...z){
console.log(`x=${x} y=${y} z=${z}`);
}

sum (20,50,60,10,5);