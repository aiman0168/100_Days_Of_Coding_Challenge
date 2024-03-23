//Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [76, 94, 34, 52, 31];
let averageGrade = grades.reduce((total, grade) => total + grade, 0)/grades.length;
console.log(averageGrade);