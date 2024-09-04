/**Assignment 1: Basic Calculator
Objective: Apply your knowledge of variables, operators, conditionals, and functions to build a simple calculator.
Instructions:
Create a function called calculate that takes three parameters: two numbers and a string representing the operation ('add', 'subtract', 'multiply', 'divide').
Inside the function, use conditionals (if-else) to perform the appropriate operation based on the input string and return the result. (You can also use switch cases, although not taught in class but you go the extra mile to know what it is).
Validate that the input numbers are valid (not null or undefined) and that the operation is one of the allowed strings.
Test your function with different sets of inputs (e.g., calculate(5, 3, 'add') should return 8, calculate(10, 2, 'divide') should return 5).
Submission: Submit your code in a .js file.
 */

const prompt = require("prompt-sync")({ sigint: true });

let result; // declare variable to hold the result of the mathematical operation

const calculator = (firstNum, secondNum, operation) => {

  // check to see that first variable is a number. Ask the user to input a number if first variable not a number
  while (typeof firstNum !== "number" || isNaN(firstNum) || firstNum === null) {
    
    console.log(`You entered '${firstNum}', first variable must be an integer`);
    firstNum = prompt("Please enter a number: ");

    if (+firstNum) {
      break;
    }
  }

    // check to see that second variable is a number. Ask the user to input a number if second variable not a number

    while (typeof secondNum !== "number" || isNaN(secondNum) || secondNum === null) {
      console.log(`You entered ${secondNum}, second variable must be an integer`);
      secondNum = prompt("Please enter a number: ");

      if (+secondNum) {
        break;
      }
    }

    // declare list of valid operations
    const validOperations = ["add", "subtract", "multiply", "divide"];

    while (!validOperations.includes(operation.toLowerCase())) {
      console.log(
        `You entered '${operation}'. This is an invalid operation. Please choose from [add, subtract, divide, multiply].`
      );
      operation = prompt("Enter choice of mathematical operation: ");

      if (validOperations.includes(operation.toLowerCase())) {
        break;
      }
    }

    // mathematical operations
    if (operation.toLowerCase() === "add") {
      result = firstNum + secondNum;
      console.log(`\nThe sum of ${firstNum} and ${secondNum} = ${result}`);
    } else if (operation.toLowerCase() === "subtract") {
      const result = firstNum - secondNum;
      console.log(`\n${firstNum} minus ${secondNum} = ${result}`);
    } else if (operation.toLowerCase() === "multiply") {
      const result = firstNum * secondNum;
      console.log(`\n${firstNum} multiplied by ${secondNum} = ${result}`);
    } else if (operation.toLowerCase() === "divide") {
      // check denominator is not a zero or NaN
      if (secondNum === 0 || isNaN(secondNum)) {
        console.log(
          "You cannot divide by zero. Change your denominator to a non-zero number"
        );
      } else {
        if (firstNum % secondNum !== 0) {
          result = firstNum / secondNum;
          result = result.toFixed(2); // 2 decimal places if the division result is not a whole number
        } else {
          result = firstNum / secondNum;
        }
        console.log(`\n${firstNum} divided by ${secondNum} = ${result}`);
      }
    }
  
};

// test calculator function
calculator("10", 5, "Divide"); // expected output - user will be asked to input a number for the first variable because it is not of type number
calculator(10, "three", "Divide"); // expected output - user will be asked to input a number for the second variable because it is not of type number
calculator(null, 5, "Divide"); // expected output - user will be asked to input a number for the first variable because it is a not of type number
calculator(NaN, 5, "Divide"); // expected output - user will be asked to input a number for the first variable because it is a not of type number
calculator(undefined, 5, "Divide"); // expected output - user will be asked to input a number for the first variable because it is a not of type number

calculator(20, 4, "multiply"); // expected output - 80
calculator(20, 4, "divide"); // expected output - 5
calculator(20, 4, "add"); // expected output - 24
calculator(20, 4, "subtract"); // expected output - 16
calculator(20, 0, "divide"); // expected output - Zero Division error - you cannot divide by zero
calculator(25, 5, "addition"); // expect output- Wrong choice of operation. Please choose from [add, subtract, divide, multiply. Type in any case letter you want]
