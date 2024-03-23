//Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [76, 94, 34, 52, 31];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
