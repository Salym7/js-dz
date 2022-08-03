'use strict';

// Task#1
// const arr = ['a', 'b', 'c', 'd'];
// console.log(`'${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}'`);

// Task#2
// const arr = [2, 5, 3, 9];
// const result = arr[0] * arr[1] + arr[2] * arr[3]
// console.log(result)

// Task#3
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr[1][0]);

// Task#4
// const arr = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(arr.js[0])

// Task#5
// const arr = ['x', 'xx', 'xxx', 'xxxx', 'xxxxxx', 'xxxxxx'];

// Task#6
// const arr = ['1', '22', '333', '4444', '55555', '666666'];

// Task#7
// const arrayFill = (value, amount) => {
//     const arr = []
//     for (let i = 0; i < amount; i++) {
//         arr.push(value)
//     }
// return arr
// }
// const arr = arrayFill('w',8)
// console.log(arr)

// Task#8
// const arrayFill = (value, array) => {
//     const arr = []
//     for (let i = 0; i < amount; i++) {
//         array.push(value)
//
//     }
// return arr

// Task#8
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.reduce((sum, current) =>
// sum[1] <= 10 ? [sum[0] + 1, sum[1] + current] : sum, [0, 0])[0]);

// Task#9
// let arr = [1, 2, 3, 4, 5, 6];
//
// const myRevers = (array) => {
//     const copy = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         copy.push(array[i]);
//     }
//     return copy;
// }
// arr = myRevers(arr);
// console.log(arr);

// Task#10
// const arr = [[1, 2, 3], [4, 5], [6]]
// console.log(arr.reduce((a, x) => a + x.reduce((aa, y) => aa + y, 0), 0));

// Task#11
// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// console.log(arr.flat(Infinity).reduce((sum, current) =>
//     sum + current, 0));
