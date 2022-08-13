'use strict';

const getAdder = function () {
    let res = 0;
    return function (x) {
        res += x;
        return res;
    }
};
const sum = getAdder();
sum(3);
sum(5);
console.log(sum(20))




