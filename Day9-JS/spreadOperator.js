/*Spread Operator - used to expand or copy elements from arrays or objects*/
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];
console.log(arr2);

let number = [10,20,30];
let copy = [...number];
console.log(copy);

let fruits = ["apple","banana"];
let newfruits = [...fruits,"mango"];
console.log(newfruits);

/*Spread operator with Objects*/
let person = {
    name:"sam",
    age:20
};
let newPerson = {
    ...person,
    city:"Bangalore"
};
console.log(newPerson);

let student = {
    name:"Rahul",
    marks:85
};
let newStudent = {
    ...student,
    garde: "A"
};
console.log(newStudent);

/*Combinig Arrays using Spread Operator*/
let arr3 = [1,2,3];
let arr4 = [4,5,6];
let combined = [...arr3,...arr4];
console.log(combined);

let fruits1 = ["apple","banana"];
let fruits2 = ["mango","orange"];
let allfruits = [...fruits1,...fruits2];
console.log(allfruits);