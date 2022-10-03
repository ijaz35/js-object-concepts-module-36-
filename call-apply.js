const himel = {
    id: 3170,
    money: 5000,
    throughParty: function (expenses, boksis, tax) {

        this.money = this.money - expenses - boksis - tax;
        console.log(this);
        return this.money;
    }
};
const mamun = {
    id: 3171,
    money: 4000
}
const kollol = {
    id: 3172,
    money: 500
}
// we use call(functionName/this, parameter1, parameter2,....) to directly call other function method.
// himel.throughParty.call(mamun, 500, 50, 50);
// himel.throughParty.call(kollol, 100, 50, 50);

//we can also use apply(this,[parameters]) to directly call other function method.
himel.throughParty.apply(mamun, [500, 50, 50]);
himel.throughParty.apply(kollol, [500, 50, 50]);