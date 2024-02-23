function User(email, password) {

    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () { return this._email },
        set: function (value) { this._email = value }
    })

    Object.defineProperty(this, 'password', {
        get: function () { return this._password },
        set: function (value) { this._password = value }
    })

}

const user1 = new User("john@gmail.com", "123")

console.log(user1.email);