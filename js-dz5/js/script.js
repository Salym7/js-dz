'use strict';
// Task #1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
// Task #2
const person = {
    name: 'John'
};
person.name = 'Pete';
console.log(person);
// это будет работать

// Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
}
console.log(sum);
