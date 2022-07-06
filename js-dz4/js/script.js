'use strict';

const operator = prompt('Введите один из операций (add, sub, mult, div)');
const num1 = +prompt('Введите первое число');
const num2 = +prompt('Введите второе число');
let op
let res
if (operator === 'add' || operator === '+') {
    res = num1 + num2
    op = '+'
} else if (operator === 'sub' || operator === '-') {
    res = num1 - num2
    op = '-'
} else if (operator === 'mult' || operator === '*') {
    res = num1 * num2
    op = '*'
} else if (operator === 'div' || operator === '/') {
    res = num1 / num2
    op = '/'
} else {
    alert('Не правильно введенная операция')
}
console.log('Результат:', num1, op, num2, '=', res)











