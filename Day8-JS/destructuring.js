/*Destructuring*/
const person = {
    name: "Sudeep",
    age: 20,
    city:"Bangalore"
};
const {name, age, city} = person;
console.log(name);
console.log(city);

const student = {
    name1: "Rahul",
    marks: 85,
    subject:"Math"
};
const {name1,marks} = student;
console.log(name1);
console.log(marks);

/*Array Destructuring*/
let numbers = [10,20,30];
const [first,second] = numbers;
console.log(first);
console.log(second);

let colors = ["red","blue","green"];
const[c1,c2,c3] = colors;
console.log(c1);
console.log(c2);
console.log(c3);

let fruits = ["apple","banana","mango"];
const [f1,f2,f3] = fruits;
console.log(f1);
console.log(f2);

/*Destrcturing with renaming i.e renaming the variable name as somtimes we may need different variable name.*/
const user = {
    name:"Arjun",
     age: 21
};
const {name:username,age: userage} = user;
console.log(username);
console.log(userage);

const book = {
    title: " Javascript Basics",
    pages: 200
};
const { title:booktitle,pages:totalpages} = book;
console.log(booktitle);
console.log(totalpages);