let ubaid = 5;

if (ubaid > 0) {
    console.log("this number is Positive");
} else if (ubaid < 0) {
    console.log("This number is Negative");
} else {
    console.log("The number is Zero");
}


let ubaid2  = 8;

if (ubaid2 % 2 === 0) {
    console.log("This No is Even");
} else {
    console.log("This No is Odd");
}






let a = 25;
let b = 40;

if (a > b) {
    console.log("Q3: Largest number is", a);
} else if (b > a) {
    console.log("Q3: Largest number is", b);
} else {
    console.log("Q3: Both numbers are equal");
}



let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Q7: Cannot divide by zero");
        }
        break;
    default:
        console.log("Q7: Invalid operator");
}



let per = 85;

if (per >= 90) {
    console.log("Q4: Grade A");
} else if (per >= 80) {
    console.log("Q4: Grade B");
} else if (per >= 70) {
    console.log("Q4: Grade C");
} else if (per >= 60) {
    console.log("Q4: Grade D");
} else {
    console.log("Q4: Grade F");
}



let character = "a";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Q8:", character, "is a Vowel");
        break;
    default:
        console.log("Q8:", character, "is a Consonant");
}


let trafficLight = "Red";

switch (trafficLight.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}


let menuChoice = 1;
let balance = 5000;
let deposit = 1000;
let withdraw = 2000;

switch (menuChoice) {
    case 1:
        console.log("Current Balance =", balance);
        break;

    case 2:
        balance += deposit;
        console.log("Deposit successful. New Balance =", balance);
        break;

    case 3:
        if (withdraw <= balance) {
            balance -= withdraw;
            console.log("Withdrawal successful. New Balance =", balance);
        } else {
            console.log("Insufficient balance");
        }
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid menu choice");
}