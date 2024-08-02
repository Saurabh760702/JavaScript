//let age=prompt("Enter your age")
//age=Number.parseFloat(age)
let runAgain=true;
while(runAgain){
    let age=prompt("Enter your age")
age=Number.parseFloat(age)
const canDrive=(age)=>{
 return age>=18?true:false
}
if(age<0){
    console.error("please enter the valied age");
    document.write("<br>its not a valied age"+age)
    break;
}
if(canDrive(age)){
    alert("Yes you can Drive the vehicals")
}
else{
    alert("No you can not drive the vehicals")
}
document.write("<br>You age is = "+age)
//console.log(age);
//console.dir(age)
runAgain=confirm("Do ypu want to play again")
}