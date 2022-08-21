'use strict';

const func = (str, steps = 1) => {
    const result = +str + +revStr(str) + '';
    if (result !== revStr(result)) return func(result, steps + 1)
    return {result, steps};

}
const revStr = str => str.split("").reverse().join("");

console.log(func('48'));

