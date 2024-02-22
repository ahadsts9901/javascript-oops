function multiplyBy5(num) {
    return num * 5
}

// console.log(multiplyBy5(7));


// multiplyBy5.ahadsts = 90
// console.log(multiplyBy5.ahadsts);


// console.log(multiplyBy5.prototype); // not accessable in arrow function () => {}

function user(userName, age) {

    this.userName = userName
    this.age = age
    return this
}

user.prototype.increment = function () {
    this.age++
}

user.prototype.printMe = function () {
    return `Print ${this.userName}`
}

const user1 = new user("john", 45)

// console.log(user1);
// console.log(user1.increment());
// console.log(user1);

console.log(user1.printMe());