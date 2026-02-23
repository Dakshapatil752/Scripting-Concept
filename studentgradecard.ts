const input = require("prompt-sync")();

var studentName: string = input("Enter Student Name: ");
let rollNo: number = Number(input("Enter Roll Number: "));
let mark1: number = Number(input("Enter Marks 1: "));
let mark2: number = Number(input("Enter Marks 2: "));
let mark3: number = Number(input("Enter Marks 3: "));

let total: number = mark1 + mark2 + mark3;
let average: number = total / 3;

enum Grade { A = "A", B = "B", C = "C", F = "Fail" }
let grade: Grade;

if (average >= 75) {
    grade = Grade.A;
} else if (average >= 60) {
    grade = Grade.B;
} else if (average >= 40) {
    grade = Grade.C;
} else {
    grade = Grade.F;
}

let isPassed: boolean = grade !== Grade.F;

console.log("\n===== STUDENT GRADE CARD =====");
console.log("Name:", studentName);
console.log("Roll No:", rollNo);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);
console.log("Passed:", isPassed);