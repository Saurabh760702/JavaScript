//Following two line will run successfully due to javascript hoisting
 
console.log(a)
greet()
//const greet= ()=>{  Error
function greet(){
    console.log("hello good morning")
}
var a=17;      //declaration hoisted to the top but initiliztion is not
//let a=2;   error
//const a=2;   error
console.log(a)

