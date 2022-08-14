'use strict';

const makeArray = () => {
    let arr = []
    for (let i = 1; i <= 100; i++) {
        arr.push(i)
    }
    return () =>arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

const random = makeArray()

for (let i = 0; i < 100; i++) {
    console.log(random());
}






