'use strict';
(() => {

    function bind(context, fn, ...rest) {
        return function (...args) {
            return fn.call(context, ...rest.concat(args));
        }
    }

    function getLogInfo(ram, battery) {
        console.log(`Goods: product - ${this.product}; memory - ${this.memory}; cost - ${this.cost}; RAM - ${ram}; battery - ${battery} `);
    }

    const testObj = {
        product: 'Samsung',
        memory: '128gb',
        cost: '150$',
    }

    bind(testObj, getLogInfo)('6gb', '5000ma');
})();
