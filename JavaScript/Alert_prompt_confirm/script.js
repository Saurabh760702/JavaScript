alert("Enter the value of A")
let a=prompt("Enter A value here","45")
a=Number.parseInt(a)
alert("you entered a of type is "+(typeof a))
let write=confirm("Do you want to write it to the page")
if(write){
document.write(a)
}
else{
    document.write("please allow me to write on the page")
}