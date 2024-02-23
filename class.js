class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}-sts`
    }

    changeUserName() {
        return this.userName.toUpperCase()
    }
}

const user1 = new User('John', 'john@gmail.com', '123');

// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

// behind the scenes

const user = function (userName, email, password) {

    this.userName = userName
    this.email = email
    this.password = password

}

user.prototype.encryptPassword = function () {
    return `${this.password}-sts`
}

user.prototype.changeUserName = function () {
    return this.userName.toUpperCase()
}

const user2 = new user("doe", "doe@gmail.com", "0909")

// console.log(user2.encryptPassword());
// console.log(user2.changeUserName());