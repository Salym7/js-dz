'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];

const indexFunction = (array, find, start = 0) => {
    for (let i = start; i < array.length; i += 1) {
        if (array[i] === find) return i;
    }
    return -1;
}
console.log(indexFunction(arr, 5));


const lastIndexFunction = (array, find, start) => {
    if (!start) start = array.length - 1;
    for (let i = start; i >= 0; i -= 1) {
        if (array[i] === find) return i;
    }
    return -1;
}
console.log(lastIndexFunction(arr, 4,))


const findFunction = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) return array[i];
    }

}
console.log(
    findFunction(arr, (item) => item > 1)
);


const findIndexFunction = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) return array[i];
    }
    return -1;
};
console.log(
    findIndexFunction(arr, (item) => item > 3)
);


const includesFunction = (array, find, start = 0) => {
    for (let i = start; i < array.length; i += 1) {
        if (array[i] === find) return true;
    }
    return false;
}
console.log(includesFunction(arr, 10));


const everyFunction = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (!callback(array[i], i, array)) return false;
    }
    return true;
};
console.log(
    everyFunction(arr, (item) => item > 2)
);


const someFunction = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) return true;
    }
    return false;
};
console.log(
    someFunction(arr, (item) => item > 5)
);