'use strict';

const insertWordInto = (str) => {
    let step = 0
    return (world) => {
        let array = str.split(' ')
        if (step === array.length + 1) step = 0
        array.splice(step, 0, world)
        step += 1
        return array.join(' ')
    }
}

const str = 'people consume a good deal of sugar'

const insert = insertWordInto(str)
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));
console.log(insert('Yes'));

