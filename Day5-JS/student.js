/*Array of Objects*/
let students = [
    {name: "Arjun",marks: 85},
    {name: "Ram",marks: 45},
    {name: "Dev",marks: 30}
];
console.log(students[0].name);
console.log(students[1].marks);
for(let i = 0;i < students.length;i++){
    console.log(students[i].name);
}

/*Filtering the student who are pass*/
let students1 = [
    {name: "Shyam",marks: 85},
    {name: "Roy",marks: 45},
    {name: "Lucky",marks: 30}
];
for(let i = 0;i < students1.length; i++){
    if(students1[i].marks>=40){
        console.log(students1[i].name);
    }
}
