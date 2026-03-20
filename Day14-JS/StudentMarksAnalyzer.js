let students = [
    {name: "Sudeep", marks: 80},
    {name: "Ravi", marks: 45},
    {name: "Arjun", marks: 90},
    {name: "Kiran", marks: 60},
    {name: "Amit", marks: 30},
];
let total = students.reduce((acc, s) => acc + s.marks, 0);
let passed = students
    .filter( s => s.marks >= 50)
    .map(s => s.name);
let failed = students.filter( s => s.marks < 50);
let top = students.reduce((max, s) => s.marks > max.marks ? s : max);
console.log(`Total: ${total}`);
console.log(`Passed: ${passed}`);
console.log(`Total Failed: ${failed.length}`);
console.log(`Topper: ${top.name} (${top.marks})`);