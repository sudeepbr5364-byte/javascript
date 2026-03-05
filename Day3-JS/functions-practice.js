/*functions practice*/
function greet(name){
    return "Hello " + name;
}

function add(a,b){
    return a + b;
}   

function checkeven(num){
    if(num % 2 === 0){
        return "Even";
    }else {
        return "Odd";
    }
}
console.log(greet("Sudeep"));
console.log(add(5, 7));
console.log(checkeven(10));

/*Arrow function*/
const add1 = (a,b) => a + b;
console.log(add1(5,3));

const greet1= (name) => "Hello " + name;
console.log(greet1("Sudeep"));

const checkNumber = (num) =>{
    if(num > 0){
       return "Positive";
    }else if(num < 0){
      return  "Negative";
    }else{
       return  "Zero";     
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));