// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 150,
    ingredients: ['ginger', 'milk', 'sugar'],
    isAvailable: true,
    orderChai: function () {
        console.log("order chai");
    }
}


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// output: { value: 'ginger chai', writable: true, enumerable: true, configurable: true }


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
}) // the name will not iterable



// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// output: { value: 'ginger chai', writable: false, enumerable: false, configurable: true }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        // console.log(`${key} : ${value}`);
    }
}