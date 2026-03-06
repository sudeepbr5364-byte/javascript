/*Methods: A function within an object*/
let person = {
    name:"Sudeep",
    age:18,
    greet: function(){
        console.log("Hello, My name is "+ this.name);
    }
}
person.greet();


let calculator = {
    add: function(a,b){
        console.log(a + b);
    },
    multiply: function(a, b){
        console.log(a * b);
    }
};
calculator.add(5,3);
calculator.multiply(4,2);

/*To provide result whether the student is "Pass" or "Fail"*/
let student = {
    name:"Sam",
    marks:30,
    result:function(){
        if(student.marks>=40){
             console.log("Pass");
        }
        else{
            console.log("Fail");
        }
    }
}
student.result();