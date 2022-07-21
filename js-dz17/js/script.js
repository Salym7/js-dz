'use strict';

const num = +prompt('Введите число');
const expo = +prompt('Введите степень');

const pow = (a, b = 1) => {

    if (!num || isNaN(a)) return 'Введите число правильно!!!';
    if (!expo || isNaN(b)) return 'Введите степень правильно!!!';
    return Math.pow(a, b);
}

let step = pow(num, expo);
alert(step)


