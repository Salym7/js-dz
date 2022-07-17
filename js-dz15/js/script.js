'use strict';

let num = +prompt('Введите просто число', '');
let flag = true;

if (!num) {
    alert('Введите число!!!!');
} else if (num <= 1) {
    flag = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
}
console.log(flag)




