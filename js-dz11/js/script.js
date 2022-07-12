'use strict';

let a = prompt('Введите первую переменную');
let b = prompt('Введите вторую переменную');
console.log(+a === 0 ? 'Верно' : 'Неверно');
console.log(+a > 0 ? 'Верно' : 'Неверно');
console.log(+a < 0 ? 'Верно' : 'Неверно');
console.log(+a >= 0 ? 'Верно' : 'Неверно');
console.log(+a <= 0 ? 'Верно' : 'Неверно');
console.log(+a !== 0 ? 'Верно' : 'Неверно');
console.log(a === 'Test' ? 'Верно' : 'Неверно');
console.log(a === '1' ? 'Верно' : 'Неверно');
console.log(5 > +a > 0 ? 'Верно' : 'Неверно');
console.log(+a === 0 || +a === 2 ? +a + 7 : a / 10);
console.log(a <= 1 && +b >= 3 ? +(a + b) : a - b);

console.log(11 > a > 2 || 11 > b > 6 ? 'Верно' : 'Неверно');

let num = 4;
let result
switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        console.log('Неверно введены данные ');
}
console.log(result)
