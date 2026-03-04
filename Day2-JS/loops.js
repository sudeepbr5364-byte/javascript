/*Loops*/
/*Example1:Print 1 to 5*/
for(let i = 1;i <= 5; i++){
    console.log(i);
}
/*Example2:Print 1 to 10*/
for(let i = 1;i <= 10;i ++){
    console.log(i);
}
/*Example3:Print even numbers between 1 to 20*/
for(let i = 1;i <= 20;i++){
    if(i % 2 === 0){
        console.log("Even:",i);
    }
}
/*Example4:Print multiple of 3 and total multiples of 3*/
let count = 0; 
for(let i = 1; i <= 50; i++){
    if( i % 3 === 0){
        console.log("Multiple of 3:",i);
  count++;
      }
} 
console.log("Total Multiple of 3:",count);

/*Example5:Print multiple of 3,5 and total multiples of 3,5*/

let count35 = 0;
for(let i = 1; i <=50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Multiple of 3 and 5:",i);
        count35++;
    }
}
console.log("Total Multuples of 3 and 5:",count35);

/*FizzBuzz Program*/
for(let i = 1;i <= 30;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }   
}



