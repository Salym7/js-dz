'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function arrFunction(anyArr) {
    const exampleArr = []
    let index
    if (anyArr.length === 0) return console.log('This array empty');

    for (index = 0; index < anyArr.length; ++index) {
        if (Math.sign(anyArr[index]) === 1 || Math.sign(anyArr[index]) === 0) exampleArr.push(anyArr[index])
    }
    console.log(exampleArr)
    if (exampleArr.length === 0) return null

    return exampleArr
}

arrFunction(arr)
