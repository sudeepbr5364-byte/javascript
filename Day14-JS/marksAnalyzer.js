let marks = [80, 45, 90, 60, 30];
let count = 0;
let total = marks.reduce((acc, mark) => acc + mark,0);
let avg = total / marks.length;
let passed = marks.filter(marks => marks >= 50);
let highest = Math.max(...marks);
let failed = marks.filter(marks => marks < 50)
console.log(`Total Failed: ${failed.length}`);
console.log(`Total: ${total}`);
console.log(`Average: ${avg}`);
console.log(`Passed: ${passed}`);
console.log(`Highest: ${highest}`);
