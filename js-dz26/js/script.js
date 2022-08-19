'use strict';

// Task#1

const factorials = (x) => {
    let n = x - 1
    if (n === 0) return x;
    return x * factorials(x - 1);
}

console.log((factorials(5)));

// // Task#2

const pow = (x, n) => {
    if (n === 1) return x;
    return x * pow(x, n - 1);
}

console.log((pow(5, 3)));

// Task#3

const recursionSum = (a, b) => {
    if (b === 0) return a
    return recursionSum(a + 1, b - 1);
}
console.log(recursionSum(55, 105));

