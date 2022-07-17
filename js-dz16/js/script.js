'use strict';

const num = +prompt('Введите простое число', '');
let min = 1;
if (num < 1) {
    min = NaN;
} else {
    for (let i = 2; num >= i; i++) {
        if (num % i === 0) {
            min = i;
            break;
        }
    }
}
console.log(min)




