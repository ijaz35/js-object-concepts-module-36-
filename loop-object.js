
const car = {
    model: 'chevy',
    year: 1994,
    make: 'road line',
    color: 'white',
    convertibles: true
};
/* 
for(let i=0; i<10; i++){}
for(const num of numbers){} //array
for(const prop in car){} //object
*/

//loop through in object use forin
for (const prop in car) {
    // console.log(prop);
}

for (const prop in car) {
    //both properties and values
    // console.log(prop, car[prop]);
}

//we use Object.keys() for loop through in object
const keys = Object.keys(car);
// console.log(keys);  //it returns an object
for (const prop of keys) {
    // console.log(prop, car[prop]);
}

//we use Object.entries() for loop through in object
const entities = Object.entries(car);
// console.log(entities);
for (const [key, value] of entities) {
    console.log(key, value);
}