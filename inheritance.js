class User {
    constructor(userName) {
        this.userName = userName;
    }

    printMe() {
        return `userName is ${this.userName}`
    }
}

class Teacher extends User {

    constructor(userName, email, password) {

        super(userName)
        this.email = email;
        this.password = password;

    }

    addCourse() {
        return `a course is added by ${this.userName}`
    }

}

const teacher1 = new Teacher('jack', 'jack@gmail.com', '123');

// console.log(teacher1.addCourse());

const user1 = new User('john');

// console.log(user1.printMe());
// console.log(teacher1.printMe());

// console.log(teacher1 instanceof Teacher);
// console.log(teacher1 instanceof User);
// console.log(user1 instanceof Teacher);
// console.log(user1 instanceof User);