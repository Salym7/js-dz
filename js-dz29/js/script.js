'use strict';

(() => {
    let makeArray = (max) => {
        let arr = [];
        const getRandomNumber = () => {
            if (arr.length === max) return arr;
            let num = Math.floor(Math.random() * max + 1);
            arr.includes(num) ? getRandomNumber() : arr.push(num);
            return arr;
        }
        return getRandomNumber;
    }
    let generateNum = makeArray(100);
    generateNum();
    generateNum();
    generateNum();
    console.log(generateNum());
})();

