'use strict';

// const mono = (str) => {
//     const obj = {}
//     for (let l of str.toLowerCase()) {
//         obj[l] = obj[l] + 1 || 1
//     }
//     return obj
// }
//
// const anagramma = (str1, str2) => {
//     const obj1 = mono(str1)
//     const obj2 = mono(str2)
//     console.log(Object.keys(obj1));
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
//     for (let l in obj1) {
//         if (obj1[l] !== obj2[l]) return false
//     }
//     return true
// }
//
// console.log(anagramma('Привет', 'тевирП'));


// const bar = (str) => {
//     if (typeof str !== 'string') return false
//     const fil = str.split('.')
//     if (fil.length !== 4) return false
//     for (let i = 0; i < fil.length; i++) {
//         if (isNaN(fil[i]) || fil[i] === '') return false
//         if (!(fil[i] >= 0 && fil[i] < 256)) return false;
//     }
//     return true
// }
//
// console.log(bar('112.123.123.155'))