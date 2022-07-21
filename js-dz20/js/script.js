'use strict';

const needSize = 48
const onePrice = 13
const oneWeight = 0.075
const borsch = (size) => {
    let weight = size * 4 * oneWeight
    let price = onePrice * weight
    return Math.ceil(price)
}

console.log('Что бы приготовить ' + needSize + ' литров борща, нужно купить картошки на ' + borsch(needSize) + 'грн')

