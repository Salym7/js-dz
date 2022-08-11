'use strict';

// Task#1
// const arrFirst = [1, 2, 3]
// const arrSecond = [4, 5, 6]
// let updatedArr = arrFirst.concat(arrSecond)
// console.log(updatedArr);

// Task#2
// const arr = [1, 2, 3]
// const arrReverse = arr.reverse();
// console.log(arrReverse)

// Task#3
// const arr = [1, 2, 3]
// arr.push(4, 5, 6);
// console.log(arr)

// Task#4
// const arr = [1, 2, 3]
// arr.unshift(4, 5, 6);
// console.log(arr)

// Task#5
// const arr = ['js', 'css', 'jq']
// console.log(arr.shift())

// Task#6
// const arr = ['js', 'css', 'jq']
// console.log(arr.pop())

// Task#7
// const arr = [1, 2, 3, 4, 5]
// const arrNew = arr.slice(0, 3)
// console.log(arrNew)

// Task#8
// const arr = [1, 2, 3, 4, 5]
// const arrNew = arr.slice(3, 6)
// console.log(arrNew)

// Task#9
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)

// Task#10
// const arr = [1, 2, 3, 4, 5]
// const arrNew = arr.slice(1, 4)
// console.log(arrNew)

// Task#11
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// Task#12
// const arr = [1, 2, 3, 4, 5];
// arr.push('e');
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// console.log(arr)

// Task#13
// const arr = [3, 4, 1, 2, 7];
// arr.sort()
// console.log(arr)

// Task#14
// const arr = [5, 6, 7, 8, 9];
// const result = arr.reduce(function (sum, elem) {
//     return sum + elem;
// }, 0);
// console.log(result);

// Task#15
// const arr = [5, 6, 7, 8, 9];
// const result = arr.reduce(function (sum, elem) {
//     return sum + elem * elem;
// }, 0);
// console.log(result);

// Task#16
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];
//
// const positiveNumber = (value) => {
//     return value < 0
// };
//
// arr = arr.filter(positiveNumber)
// console.log(arr)

// Task#17
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];
//
// const positiveNumber = (value) => {
//     return value > 0
// };
//
// arr = arr.filter(positiveNumber)
// console.log(arr)

// Task#18

// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
// const bigString = (value) => {
//     return value.length > 5
// };
// arr = arr.filter(bigString)
// console.log(arr)

// Task#19
// let arr = [1, 2, [3, 4], 5, [6, 7]]
// arr = arr.filter(Array.isArray);
// console.log(arr)

// Task#20
// let arr = [5, -3, 6, -5, 0, -7, 8, 9];
// let result = arr.reduce((sum, current) => current < 0 ? sum += 1 : sum, 0);
// console.log(result)
