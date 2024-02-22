const myName = " j  oh n  "
// console.log(myName.length); // length will be 10

const heroes = ["spiderman", "thor"]

const powers = {
    spiderman: "slung",
    thor: "hammer",
    getSpiderManPower: function () {
        return this.spiderman;
    }
}

// console.log(powers.getSpiderManPower());

// inject function globally
Object.prototype.getSTS = function () {
    return "sts is available";
}

// console.log(powers.getSTS());
// console.log(heroes.getSTS());


Array.prototype.setSTS = function () {
    return "sts is available";
}

// console.log(powers.setSTS());


// challenge is to create a function which tells the true length without spaces

let anotherName = "  junaid    "

String.prototype.trueLength = function () {
    return this.trim().length;
}

console.log(anotherName.trueLength());