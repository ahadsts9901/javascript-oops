function setUserName(userName) {
    this.userName = userName;
    console.log("call");
}

function user(email, password, userName) {

    // setUserName(userName) // ===> not works ( function will called but destroy immidiately so refrence will also destroy and the userName will not set )
    // setUserName.call(userName) // ===> not works ( it will also not work because the function will still destroy )
    setUserName.call(this, userName) // ===> works ( because we will hold the value in out "this" so the function will destroy but refrence will still in our "this" )
    this.email = email;
    this.password = password;

}

const john = new user("john@gmail.com", "1234", "john")

console.log(john);

// "call" passes our current execution context to another function