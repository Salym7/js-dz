'use strict';

(() => {
    function takeFn(fn) {
        let cache = new Map
        return function (a,b) {
            if (cache.has(`${a} ${b}`)){
                console.log("достало")
                return cache.get(`${a} ${b}`)
            }
            if (cache.size >= 10) {
                console.log("больше 10")
                Array.from(cache.keys()).shift()
            }
            cache.set(`${a} ${b}`, fn(a,b))
            console.log("сохранил")
            console.log(cache);
        }
    }

    function sum(a, b) {
        return a + b
    }
    const cacheFn = takeFn(sum)

    cacheFn(5,5)
    cacheFn(5,7)
    cacheFn(1,5)
    cacheFn(2,7)
    cacheFn(10,5)
    cacheFn(1,5)
    cacheFn(2,5)
    cacheFn(3,5)
    cacheFn(4,5)
    cacheFn(5,5)
    cacheFn(6,5)
    cacheFn(7,5)
    cacheFn(7,8)
    cacheFn(7,9)

})();

