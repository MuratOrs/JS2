/* 'use strict';
let num = 20;

function showFirstMessage(text){
    alert(text);
    console.log(num);
    
 }

showFirstMessage('Hello, world!');
console.log(num);
 */

//Функия работает до объявления в коде

let calc = (a,b) => a*b;


console.log(calc(3,4));
console.log(calc(4,2));


function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = 'Test';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let hor = "15.3px";
//console.log(Math.round(hor));
console.log(parseInt(hor));
console.log(parseFloat(hor));
