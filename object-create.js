//1. Using object literal
const student = { name: 'ayman sadik', job: 'web developer' };

//2. constructor
const person = new Object();
// console.log(person);

//
// const people = Object(null);
const people1 = Object(student);
// console.log(people1.job);

//3. creating object from class.It is called syntactical sugar.
class car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
const myCar = new car('Toyota', 'red');
console.log(myCar);

//5. creating object by function
function cat(name, weight) {
    this.name = name;
    this.weight = weight;
}
const myCat = new cat('pussy', 20);
console.log(myCat);