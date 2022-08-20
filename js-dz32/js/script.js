'use strict';

let calculator = {
    read() {
        this.a = +prompt('Enter first number')
        this.b = +prompt('Enter second number')
        if (isNaN(this.a) || isNaN(this.b)) return alert('data entered incorrectly')
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());