/*Default paramater*/
function greet(name = "Guest"){
    console.log(`Hello ${name}`);
}
greet("Sudeep");
greet();

/*Multiple Default Parameters*/
function student(name = "Unknown",
course = "Not Assigned"){
    console.log(`Name: ${name}`);
    console.log(`Course: ${course}`);
}
student("Sudeep","Engineering");
student();

function showprice(price = 100){
    console.log(`Price: ${price}`);
}
showprice();
showprice(500);

/*Taska*/
function createUser(name = "Guest", age = 18){
    console.log(`User: ${name}, Age: ${age}`);
    }
createUser();
createUser("Sudeep",21);

function order(item = "Coffee", quantity = 1){
    console.log(`Order: ${item}, Quantity: ${quantity}`);
}
order();
order("Tea", 2);