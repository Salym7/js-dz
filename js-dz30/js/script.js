'use strict';

const makeCounter = (number = 0) => {
    let count = number
    const increase = () => {
        return count += 1
    }
    const decrease = () => {
        return count -= 1
    }
    const value = () => {
        return count
    }

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





