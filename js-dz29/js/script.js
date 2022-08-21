'use strict';
const makeArray = (max) => {
    const arr = []
    for (let i = 1; i <= max; i++) {
        arr.push(i)
    }

    function getRandomNumber() {
        return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    }

    return getRandomNumber;
}

const random = makeArray(100)
console.log(random());
console.log(random());
console.log(random());
console.log(random());



