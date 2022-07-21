'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const getPositiveNumbersArray = initialArray => {
    const defaultResult = [];

    if( !Array.isArray(initialArray) || !initialArray.length ) return defaultResult;

    const positiveNumbersArray = [];

    for(let i = 0; i < initialArray.length; i += 1) {

        if(typeof initialArray[i] !== 'number') continue;
        if(isNaN(initialArray[i])) continue;

        if( initialArray[i] > 0 ) {
            positiveNumbersArray.push(initialArray[i])
        }

    }

    return positiveNumbersArray.length > 0 ? positiveNumbersArray : defaultResult;
}


const positiveNumbersArray = getPositiveNumbersArray(arr)

console.log(positiveNumbersArray)


