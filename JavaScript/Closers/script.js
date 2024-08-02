message="Good Night"
function hello1(){
  let  message="Good morning"
    {
      let  message="Good Afternoon"
    console.log("Hello 1 "+message)
    }
    console.log(message)

    let c=function hello2(){
        console.log("I am C "+message)
    }
    return c
}
c=hello1()
c()


function init(){
    var name="Saurabbh singh";//name is local variable created by init
    function displayName(){
        //displayName() is the inner function a closer
        console.log(name);  //use variable declared in the parent function
    }
    name="Harry"
    return displayName;
}
let d=init();
d()


function returnFun(){


const x=()=>{
    let a=1
    console.log(a)
    const y=()=>{
       // let a=2
        console.log(a)
        const z=()=>{
           // let a=3
            console.log(a)
        }
        z()
    }
    a=50
    y()
}
x()

 return x
}
 let a=returnFun()
 a()