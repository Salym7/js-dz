'use strict';

const num = +prompt('Введите число');
const expo = +prompt('Введите степень');

function pow(a, b = 1) {

    if (isNaN(a) || isNaN(b)) {
        return 'some error';
    }
    return Math.pow(a, b);
}

let step = pow(num, expo);
alert(step)


