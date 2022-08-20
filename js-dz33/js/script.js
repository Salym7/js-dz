'use strict';

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().up().down().showStep(); // 3
