'use strict';

const hours = +prompt('Введите количество часов ')
const seconds = hours * 3600
console.log(seconds)
alert(`Количество секунд в ${hours} часов = ${seconds}`)