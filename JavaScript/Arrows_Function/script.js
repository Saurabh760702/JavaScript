function greet(){
    console.log("Good Morning")
}
greet();

let heet=()=>{     //this is my arrows function
    console.log("Good Afternoon");
}
// let sum=(a,b)=>{
//     return a+b;
// }
let sum=(a,b)=>a+b;    //shortcut by arrow function
let half=a=>a/2;

heet();
setTimeout(()=>{
    console.log("We are inside settimeout")
},3000);

let obj1={
    greeting:"Good Morning",
    names:["saurabh","ram","shyam","sumit"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+" Hello "+student)

        })
    }
}
obj1.speak();