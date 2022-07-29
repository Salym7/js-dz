'use strict';

const mainFunction = (callback) => {
    const num = +prompt('Введите число');
    const expo = +prompt('Введите степень');
    if (!num || isNaN(num)) return alert('Введите число правильно!!!');
    if (!expo || isNaN(expo)) return alert('Введите степень правильно!!!');
    callback(num, expo)
}

const exponentiation = (a, b) => {
    let result = Math.pow(a, b);
    alert(result)
}

const multiplay = (a, b) => {
    let result = a * b;
    alert(result)
}

const division = (a, b) => {
    let result = a / b;
    alert(result)
}


const modulo = (a, b) => {
    let result = a % b;
    alert(result)
}

mainFunction(exponentiation)
