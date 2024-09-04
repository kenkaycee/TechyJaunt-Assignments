const prompt = require("prompt-sync")({ sigint: true });

/**Assignment 2: Array and Object Manipulation
Objective: Demonstrate your understanding of arrays and objects by creating and manipulating a dataset.
Instructions:
Create an array of objects representing students. Each object should have properties like name (string), age (number), and grade (string).
Write a function called filterByGrade that takes the array and a grade as parameters and returns a new array containing only the students with the matching grade.
Write another function called averageAge that calculates and returns the average age of the students in the array.
Use loops and array methods like filter, map, or reduce where appropriate.
Submission: Submit your code in a .js file.
 */

// array of students objects 
let students = [
  {
    "first name": "Mike",
    "last name": "Smith",
    "age": 25,
    "grade": 89,
  },
  {
    "first name": "John",
    "last name": "Adam",
    "age": 30,
    "grade": 56,
  },
  {
    "first name": "Ekene",
    "last name": "Mgbeke",
    "age": 33,
    "grade": 70,
  },
  {
    "first name": "Arteta",
    "last name": "Owen",
    "age": 22,
    "grade": 35,
  },
  {
    "first name": "Stephen",
    "last name": "Clare",
    "age": 29,
    "grade": 79,
  },
  {
    "first name": "Catherine",
    "last name": "Smart",
    "age": 24,
    "grade": 70,
  },
  {
    "first name": "Petra",
    "last name": "Daniel",
    "age": 21,
    "grade": 82,
  },
  {
    "first name": "Paul",
    "last name": "Courtney",
    "age": 23,
    "grade": 90,
  },
  {
    "first name": "Caroline",
    "last name": "Lesley",
    "age": 29,
    "grade": 88,
  },
  {
    "first name": "Ngozi",
    "last name": "Okafor",
    "age": 27,
    "grade": 77,
  },

];



// Function filterByGrade that takes the array and a grade as parameters and returns a new array containing only the students 
// with the matching grade.

const filterByGrade = (students, mark) => {
  return students.filter(student => student.grade === mark)
};


// test function filterByGrade using a Do While Loop

let answer;
let grade;
let filteredStudents;
console.log("\n****FILTER STUDENTS BY GRADE******\n")

do
{
  grade = +prompt("Enter grade (grade must be between 0 and 100): ");
  // input validation - validate that mark is between 0 and 100
  while(grade < 0 || grade > 100 || typeof grade !== "number")
  {
    console.log("Grade must be integers and between 0 and 100");
    grade = +prompt("Enter grade: ");

  }
  filteredStudents = filterByGrade(students, grade);
  if(filteredStudents.length === 0)
  {
    console.log("\nThere is no student with a grade of:", grade)
  }
  else
  {
    console.log(`\nStudents with a grade of ${grade}: `);
    for(let student in filteredStudents)
    {
      console.log(filteredStudents[student]);
    }
  }
  answer = prompt("\nDo you want to filter student by another grade: [y/n]? ");
  answer = answer.toLowerCase();
  const validAnswers = ["Y", "y", "N", "n"];
  while(!validAnswers.includes(answer))
  {
    console.log("Please choose from [y, Y, n, N]: ");
    answer = prompt();
    if(validAnswers.includes(answer))    {
      answer = answer.toLowerCase();
      break;
    }
  }
}
while(answer !== "n".toLowerCase()) // the loop will stop when the user types "n" or "N"

/**Write another function called averageAge that calculates and returns the average age of the students in the array. */

let totalAge = 0;
const averageAge = (students) => {
  students.forEach(student => {
    totalAge = totalAge + student.age;
  })
  return totalAge / students.length;
}

const meanAge = averageAge(students);

console.log(`\n\nAverage age of the students: ${meanAge} years`);
