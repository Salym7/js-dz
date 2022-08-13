'use strict';


const func = str => {
    const result = +str + +revStr(str) + '';
    if (result === revStr(result)) return result;
    return func(result)
}
const revStr = str => {
    return str.split("").reverse().join("");
}

console.log(func('76'));

