const user = {
    userName: "Abdul Ahad",
    age: 25,
    favouriteFruits: ["mango", "banana", "orange"],
    getData: function () {
        console.log(this.userName);
    }
}

console.log(user.userName);
console.log(user.getData());