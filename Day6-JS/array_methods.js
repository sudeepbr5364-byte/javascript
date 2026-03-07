/*map()-Transfer data (Is used to change every item in an array)*/
/*Example: 01*/
let numbers = [1,2,3,4];
let doubled = numbers.map(function(num){
    return num * 2;
});console.log(doubled);

/*Example: 02*/
let names = ["raj","ravi","arjun"]
let upper = names.map(function(name){
    return name.toUpperCase();
});console.log(upper);

/*Mini Task: add 5 to each of them in the given array; marks = [40,50,60]*/
let marks = [40,50,60];
let plus5marks = marks.map(function(marks){
    return marks+5;
});
console.log(plus5marks);

/*Filter()-Select data (Is used to keep some items from an array i.e it keeps item that match a condition)*/
/*Example: 01*/
let numbers1 = [10,20,30,40,50];
let bigNumbers = numbers1.filter(function(num){
    return num>25;
});
console.log(bigNumbers);

/*Example: 02*/
let ages = [12,18,21,15,30];
let adults = ages.filter(function(ages){
    return ages >=18;
});
console.log(adults);

/*Minitask: Get only marks greater than or equal to 50 */
let marks1 = [35,60,20,80,50];
let newmarks = marks1.filter(function(marks1){
    return marks1>=50;
});
console.log(newmarks);

/*reduce()-Combine values ( Is ysed to convert entire array into one single value i.e sum of number,total,counting values etc)*/
/*Example: 01*/
let numbers2 = [10,20,30,40];
let total = numbers2.reduce(function(acc,num){
    return acc+num;
},0);
console.log(total);

/*Example: 02*/
let marks2 = [50,60,70];
let total2 = marks2.reduce(function(acc,mark){
    return acc+mark;
},0);
console.log(total2);

/*minitask:To calculate total price*/
let prices = [100,200,300];
let total_price = prices.reduce(function(acc,num){
    return acc+num;
},0);
console.log(total_price);

/*Mini Challenge*/
let numbers3 = [5,12,8,20,3];
let filter = numbers3.filter(function(num){
    return num>10;
});
console.log(filter);
let map = filter.map(function(num){
    return num * 2;
});
console.log(map);

/*Method chainig form*/
let numbers4 = [6,13,9,21,4];
let mc = numbers4
    .filter(function(num){
    return num > 10;
})
    .map(function(num){
        return num * 2;
});
console.log(mc);