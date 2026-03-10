/*Rest Parameters: Allows a function to accept any number of arguments*/
function sum(...numbers){
    console.log(numbers);
};
sum(1,2,3,4);

/*Sum of numbres*/
function sum1(...number){
    let total = 0;

    for (let num of number){
        total += num;
    }
    return total;
};
console.log(sum1(1,2,3,4));

/*Arrow function method*/
const sum2= (...numbers) => {
    return numbers.reduce((a,b) => a + b);
};
console.log(sum2(5,10,15));

function multiply (...numbers2){
    let total = 1;
    for(let num of numbers2){
        total=total * num;
    }
    return total;
};
console.log(multiply(2,3,4));

function findMax(...numbers){
    let largest = numbers[0]
    for(let i = 0;i < numbers.length;i++){
        if(numbers[i] > largest){
            largest = numbers[i];
    }
}
    return largest;
};
console.log(findMax(5,12,7,3,20));
