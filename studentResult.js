/* compute and return the female students results (name and average grade) from the given list of students) */

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

const femaleList = students => students.sex === "f";
const avgGrade = students => students.grades = students.grades.reduce((a,b) => a+b ,0)/ students.grades.length;

const filter = (students, func) => students.filter(func);
const result = filter(filter(students,femaleList), avgGrade);

console.log(result);