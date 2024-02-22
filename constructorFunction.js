function User(userName, age, isActive) {
    this.userName = userName
    this.age = age
    this.isActive = isActive
    this.greetings = function () {
        console.log(`hello ${userName}`);
        return `hello ${this.userName}`
    }

    return this
}

const user1 = new User("john", 28, true)
const user2 = new User("doe", 30, false)

console.log(user1);
console.log(user2.greetings());
console.log(user1.constructor);