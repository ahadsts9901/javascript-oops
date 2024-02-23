class User {

    constructor(userName) {
        this.userName = userName;
    }

    printMe() {
        return this.userName
    }

    static generateId() {
        return `${new Date().getTime()}`
    }
}


const user1 = new User('user1');

// console.log(user1.generateId());
// console.log(user1);

class Teacher extends User {
    constructor(userName, email){

        super(userName);
        this.email =  email;

    }
}

const teacher1 = new Teacher('teacher1', 'teacher1@gmail.com');

// console.log(teacher1.printMe());
// console.log(teacher1.generateId());