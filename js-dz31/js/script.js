'use strict';

const iPhone = {
    product: 'iPhone',
    cost: '100$',
}
const Samsung = {
    product: 'Samsung',
    cost: '150$',
}

function logInfo() {
    return `Product ${this.product} cost ${this.cost}`
}

const getPriceIphone = logInfo.bind(iPhone);
const getPriceSamsung = logInfo.bind(Samsung);
console.log(getPriceIphone());
console.log(getPriceSamsung());

