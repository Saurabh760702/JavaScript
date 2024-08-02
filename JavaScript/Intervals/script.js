alert("Hello")
document.write("Saurabh singh")
const sum =(a,b) => {
    console.log("Yes i am running"+(a+b));
    a+b
}
setTimeout(sum,1000,1,2)

setInterval(function(){
    alert("setInterval")
},3000)

let a=setTimeout(function() 
{
    alert("I am inside of settimeout intervals")

},5000)
let b=prompt("do you Want to run the settimeout ?")
if("n"==b){
    clearTimeout(a)
}
console.log(a)