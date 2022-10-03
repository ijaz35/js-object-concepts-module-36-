const car = {
    model: 'chevy',
    year: 1994,
    make: 'road line',
    color: 'white',
    convertibles: true
};

//Object.keys(objectName) is used to get keys of any object.It returns an array of keys.
const keys = Object.keys(car);
// console.log(keys);   //[ 'model', 'year', 'make', 'color', 'convertibles' ]

//Object.values(objectName) is used to get key's values and it also returns an array of values
const values = Object.values(car);
// console.log(values); //[ 'chevy', 1994, 'road line', 'white', true ]

//Object.entries(objectName) is used to get the entities pairs of any object and it return an two dimentional array of entities.
const entities = Object.entries(car);
// console.log(entities);   /* [[ 'model', 'chevy' ],[ 'year', 1994 ],[ 'make', 'road line' ],[ 'color', 'white' ],[ 'convertibles', true ]] */

//deleting any property form object use delete objectName.propertyName
delete car.convertibles;
car.mileage = 10000;
// console.log(car);

//If you want to seal any object use Object.seal(car). After seal you can modify key or property values but don't add or delete new property to the object.
/* Object.seal(car);  //after seal
delete car.color;   //We can't delete any property.
car.condition = 'good';   //We can't add new property.
car.color = 'red';   //After seal we can modify property.
// console.log(car); */

//If you want to freeze any object use Object.freeze(car).After seal you can't modify key or property values and don't add or delete new property to the object.
// console.log(car);
Object.freeze(car);  //After freeze
car.color = 'red';  //can't modify.
car.condition = 'good';  //can't add new property.
delete car.model;  //can't delete any property.
console.log(car);




