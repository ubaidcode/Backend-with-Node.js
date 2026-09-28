// Q1: Create a student object and print each property

let student = {
    name: "Ubaidullah",
    age: 16,
    grade: "A"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);


// Q2: Loop through all keys and values using for...in

let studentInfo = {
    name: "Ubaidullah",
    age: 16,
    grade: "A"
};

for (let key in studentInfo) {
    console.log(key + ":", studentInfo[key]);
}


// Q3: Create calculator object with methods

let calculator = {

    add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    multiply: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        return a / b;
    }
};

console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));
console.log("Multiply:", calculator.multiply(10, 5));
console.log("Divide:", calculator.divide(10, 5));


// Q4: Access values inside a nested object

let studentDetails = {
    name: "Ubaidullah",
    age: 16,

    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

console.log("Name:", studentDetails.name);
console.log("City:", studentDetails.address.city);
console.log("Country:", studentDetails.address.country);


// Q5: Convert object keys and values into separate arrays

let person = {
    name: "Ubaidullah",
    age: 16,
    city: "Karachi"
};

let keys = [];
let values = [];

for (let key in person) {
    keys.push(key);
    values.push(person[key]);
}

console.log("Keys:", keys);
console.log("Values:", values);
