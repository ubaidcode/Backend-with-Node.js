console.log("Output:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Use a while loop to calculate the sum of the first N natural numbers.

let n = 10;
let sum = 0;
let i = 1;

while (i <= n) {
    sum += i;
    i++;
}

console.log("Output: Sum = " + sum);


// Print the multiplication table of a given number using a for loop.

let tableNumber = 5;

console.log("Output: Multiplication Table of " + tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// Write a program using a while loop to find the factorial of a given number.

let factorialNumber = 2;
let factorial = 1;
let counter = 1;

while (counter <= factorialNumber) {
    factorial *= counter;
    counter++;
}

console.log("Output: Factorial = " + factorial);


// Print numbers from 10 down to 1 using a for loop.

console.log("Q5 Output:");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Use a do-while loop to print all even numbers up to N.

let limit = 10;
let evenNumber = 2;

console.log("Q6 Output:");

do {
    console.log(evenNumber);
    evenNumber += 2;
} while (evenNumber <= limit);


// Write a program using a while loop to calculate the sum of digits of a given number.

let digitNumber = 12345;
let digitSum = 0;

while (digitNumber > 0) {
    digitSum += digitNumber % 10;
    digitNumber = Math.floor(digitNumber / 10);
}

console.log("Q7 Output: Sum of digits = " + digitSum);


// Generate the first 10 terms of the Fibonacci series using a for loop.

let first = 0;
let second = 1;

console.log("Q8 Output: Fibonacci Series");

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}


// Use a do-while loop to keep asking the user for a number until they guess the correct one.

let correctNumber = 7;
let guess;
let guesses = [3, 5, 7];
let guessIndex = 0;

do {
    guess = guesses[guessIndex];
    console.log("Q9 Guess: " + guess);

    if (guess === correctNumber) {
        console.log("Q9 Output: Correct guess!");
    } else {
        console.log("Q9 Output: Try again.");
    }

    guessIndex++;
} while (guess !== correctNumber);


// Write a program using a for loop to check if a given number is prime.

let primeNumber = 17;
let isPrime = true;

if (primeNumber < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Q10 Output: " + primeNumber + " is a prime number");
} else {
    console.log("Q10 Output: " + primeNumber + " is not a prime number");
}