'use strict';

const fib = (x = 1) => {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= x; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(5));



