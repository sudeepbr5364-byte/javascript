/*Named Exports: You can export multiple functions, objects, or variables from a module using named exports. Each export is identified by its name, and you can import them individually in other modules.*/
export function add(a,b){
    return a + b;
}
export function multiply(a,b){
    return a * b;
}

/*Default Exports: A module can have one default export, which is a single value or function that represents the main functionality of the module. You can import the default export without using curly braces and can give it any name you like in the importing module.*/
function subtract(a,b){
    return a - b;
 }
 export default subtract;
    