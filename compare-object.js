const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

//1.objects can not be compaired by double(==) or triple(===) equal.javascript compairs object by reference
if (first == second) {
    console.log('both objects are same');
} else {
    // console.log('they are not equal');
}
//2.somebody stringify both object then compare it but this process has some problems
const first2 = { a: 2, b: 3 };
const second2 = { b: 3, a: 2 };

//above two objects are same but this process shows they are not equal

if (JSON.stringify(first2) === (JSON.stringify(second2))) {
    console.log('both objects are same');
} else {
    // console.log('they are not equal');
}
//3.we can compare objects by function
const first3 = { a: 1, b: 2 };
const second3 = { c: 1, d: 2 };
function compareObjects(obj1, obj2) {
    //checking two object properties length is equal or not
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    //checking two object properties values are equal or not
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first3, second3);
console.log(isEqual);
