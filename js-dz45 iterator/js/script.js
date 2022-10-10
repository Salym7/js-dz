'use strict'

const arr = [0, 1, 2, 3, 4]

function iterator(arr) {
    return {
        count: -1,
        next() {
            this.count++
            if (arr[this.count]+1) {
                return {
                    value: arr[this.count],
                    done: false,
                }
            } else {
                return {
                    value: arr[this.count],
                    done: true,
                }
            }
        },
    }
}

const itr = iterator(arr)

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// Second variant

function iterator2(arr) {
    let count = -1
    return () => {
        count++
        if (arr[count] + 1) {
            return {
                value: arr[count],
                done: false,
            }
        } else {
            return {
                value: arr[count],
                done: true,
            }
        }
    }
}
const itr2 = iterator2(arr)

console.log(itr2());
console.log(itr2());
console.log(itr2());
console.log(itr2());
console.log(itr2());
console.log(itr2());


let itr3 = arr[Symbol.iterator]();

console.log(itr3.next());
console.log(itr3.next());
console.log(itr3.next());
console.log(itr3.next());
console.log(itr3.next());
console.log(itr3.next());

