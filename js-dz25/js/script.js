'use strict';

// Task#1
// const arr = [1, 2, 3, 4, 'less', 6, 7];
//
// const indexFunction = (find, array, start = 0) => {
//     for (let i = start; i < array.length; i++) {
//         if (array[i] === find) return i;
//     }
//     return -1;
// }
//
// console.log(indexFunction('less', arr));
// console.log(arr.indexOf('less'));

// Task#2
// const arr = [1, 2, 3, 4, 5, 6, 7];
//
// const lastIndexFunction = (find, array, start = array.length - 1) => {
//     for (let i = start; i >= 0; i--) {
//         if (array[i] === find) return i;
//     }
//     return -1;
// }
//
// console.log(indexFunction(6, arr));
// console.log(arr.lastIndexOf(6));

// Task#3
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const findFunction = (array, current) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === current) return array[i]
//     }
//
//     return undefined
// };
// console.log(findFunction(arr, 2))


// Task#4
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const findIndexFunction = (array, current) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === current) return i
//     }
//     return -1
// };
// console.log(findIndexFunction(arr, 5))


// Task#5
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const includesFunction = (array, current) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === current) return true
//     }
//     return false
// };
// console.log(includesFunction(arr, 5))

// Task#6
// const arr = [5, 6, 7, 8, 9, 10];
// const everFunction = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 4) continue
//         return false
//
//     }
//     return true
// }
// console.log(everFunction(arr))

// Task#7
// const arr = [1, 3, 5, 7, 8];
// const someFunction = (array) => {
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) return true
//     }
//     return false
// }
//
// console.log(someFunction(arr))