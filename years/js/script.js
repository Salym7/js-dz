'use strict';

const years = () => {
    const x = prompt('введите возраст')
    if (isNaN(+x) || !x) alert('Введите число!')
    if (x === '1') return  alert('1 год')
    if (+x[x.length - 1] >= 2 && +x[x.length - 1] <= 4) return  alert(x + ' года')
    return alert(x + ' лет')
}

years()