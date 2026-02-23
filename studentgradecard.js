var input = require("prompt-sync")();
var studentName = input("Enter Student Name: ");
var rollNo = Number(input("Enter Roll Number: "));
var mark1 = Number(input("Enter Marks 1: "));
var mark2 = Number(input("Enter Marks 2: "));
var mark3 = Number(input("Enter Marks 3: "));
var total = mark1 + mark2 + mark3;
var average = total / 3;
var Grade;
(function (Grade) {
    Grade["A"] = "A";
    Grade["B"] = "B";
    Grade["C"] = "C";
    Grade["F"] = "Fail";
})(Grade || (Grade = {}));
var grade;
if (average >= 75) {
    grade = Grade.A;
}
else if (average >= 60) {
    grade = Grade.B;
}
else if (average >= 40) {
    grade = Grade.C;
}
else {
    grade = Grade.F;
}
var isPassed = grade !== Grade.F;
console.log("\n===== STUDENT GRADE CARD =====");
console.log("Name:", studentName);
console.log("Roll No:", rollNo);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);
console.log("Passed:", isPassed);
