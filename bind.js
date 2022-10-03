const himel = {
    id: 3170,
    money: 5000,
    throughParty: function (expenses) {

        this.money = this.money - expenses;
        console.log(this);
        return this.money;
    }
};
const mamun = {
    id: 3171,
    money: 4000
}
const kollol = {
    id: 3171,
    money: 500
}
himel.throughParty(500);
//bind(required object name) method or function is use when one object needs other objects method.
const mamunParty = himel.throughParty.bind(mamun);
mamunParty(100);
mamunParty(200);
mamunParty(200);
const kollolParty = himel.throughParty.bind(kollol);
kollolParty(300);