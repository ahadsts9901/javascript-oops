const User = {
    _email: "john@gmail.com",
    _password: "123",
    get email() {
        return this._email;
    },
    set email(value) {
        this._email = value
    }
}

const user1 = Object.create(User)

console.log(user1.email);