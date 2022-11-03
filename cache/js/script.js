'use strict';

(() => {
    const cache = new Map();

    function cacheFn(funcCallback) {
        if (cache.has(funcCallback)) {
            cache.set(funcCallback, funcCallback());
            return funcCallback
        }
        cache.set(funcCallback, funcCallback());
        return funcCallback
    }

    function sum(a, b) {
        return function sum1 (a, b){
           return  a + b;
        }

    }

    cacheFn(sum(1, 2))
    cacheFn(sum(2, 2))
    cacheFn(sum(3, 3))
    cacheFn(sum(4, 2))
    cacheFn(sum(3, 2))

    // cacheFn(sum(4, 2))
    // cacheFn(sum(4, 3))
    // cacheFn(sum(4, 5))
    // cacheFn(sum(4, 6))
    // cacheFn(sum(4, 7))
    // cacheFn(sum(4, 8))
    // cacheFn(sum(0, 7))
    // cacheFn(sum(1, 8))

    console.log(cache);
    console.log(cacheFn(sum(4, 2)));


})();

