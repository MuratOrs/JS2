/* let a = 9;
if (a !== 9){
    console.log('Добро пожаловать');    
} else {
    console.log('Доступ запрещен');
}
 */

 const button = document.querySelector('button');
 const input = document.querySelector('.age')
// () => стрелочная функция
 button.onclick = () => {
 let num = +input.value;    
 if (num >=16 && num <80){
     console.log('Добро пожаловать');
     
 } else if (num >= 100 && num < 140) {
     console.log('Вам позновато!');
   } else {
console.log('Хватит прикалываться! Я вычислю вас по ай пи');

   }
 }