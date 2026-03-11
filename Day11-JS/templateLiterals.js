/*Template Literals allows to insert variables inside strings easily*/
/*Old way*/
let name = "Sudeep";
let age = 21;
console.log("My name is " + name + " and I am " + age + " years old ");

/*modernway -Template Literals*/
let name1 = "Sudeep";
let age1 = 21;
console.log(`My name is ${name} and I am ${age} years old `);

/*Using expressions inside template literals*/
let a = 10;
let b = 5;
console.log(`The sum is ${a + b}`);

/*Multi-line Strings*/
/*old */
console.log("Hello\nWorld");
/*Template Literal way*/ 
console.log(`Hello
World`);

/*Example*/
let studentname = "Abhay.";
let course = "Computer Science Engineering";
let year = 3;
console.log(`My name is ${studentname}
I study ${course}
Year: ${year}`);

/*Using template literals in functions*/
function StudentInfo(name, course, year){
    console.log(`Student Name: ${name}`);
    console.log(`Course: ${course}`);
    console.log(`Year: ${year}`);
};
StudentInfo("Sudeep", "Engineering", 3);