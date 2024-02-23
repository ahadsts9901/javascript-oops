class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value
    }

}


const user1 = new User("john@gmail.com", "123")

console.log(user1.email);