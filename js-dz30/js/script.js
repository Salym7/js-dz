'use strict';

const makeCounter = (number = 0) => {
    let count = number
    const increase = () => count += 1

    const decrease = () => count -= 1

    const value = () => count


    return {
        increase,
        decrease,
        value
    }

}

let counter = makeCounter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.value());
console.log(counter.decrease());




