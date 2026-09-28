// Q1: Print all elements of an array using a for loop

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Q2: Find array length without using .length directly

let numbers = [10, 20, 30, 40, 50];

let count = 0;

for (let item of numbers) {
    count++;
}

console.log("Array length:", count);


// Q3: Reverse an array without using .reverse()

function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

let originalArray = [1, 2, 3, 4, 5];

console.log("Original array:", originalArray);
console.log("Reversed array:", reverseArray(originalArray));


// Q4: Calculate the sum of all numbers in an array

let values = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < values.length; i++) {
    sum += values[i];
}

console.log("Sum:", sum);


// Q5: Filter only even numbers from an array

let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = [];

for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] % 2 === 0) {
        evenNumbers.push(allNumbers[i]);
    }
}

console.log("Even numbers:", evenNumbers);
