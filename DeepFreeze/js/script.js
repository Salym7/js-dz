'use strict';

(function () {

    const user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }

    function deepFreeze(obj) {

        const propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(function (name) {
            const prop = obj[name];

            if (typeof prop == 'object' && prop !== null)
                deepFreeze(prop);
        });

        return Object.freeze(obj);
    }

    deepFreeze(user);

}())