"use strict";
const obj = {
    name: 'John',
    surname: 'Smith',
};
delete obj.name;
obj.name = 'Pete';
const arr = [1, 2, 3, -1, -2, -3];
function moreZero(arr) {
    return arr.every(a => a > 0);
}
console.log(moreZero(arr));
