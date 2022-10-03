const student = {
    name: 'Himel bin mamun',
    id: 3170,
    money: 5000,
    subject: ['eiglish', 'bangla', 'mathematics', 'physics'],
    bestFriend: {
        name: 'shimul kundu',
        address: 'Purbasha',
        id: 2334
    },

    //functions are method in any object
    attendExam: function () {
        console.log(this.name + ' is attending ' + this.subject[2] + ' exam.');
    },
    party: function (expenses, treat) {
        this.money = this.money - expenses - treat;
        return this.money;
    }
};
const info = student.attendExam();
const remaining1 = student.party(900, 100);
const remaining2 = student.party(500, 50);

console.log(remaining1);
console.log(remaining2);