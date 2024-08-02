//NN BB SS U -primitive in js 
let a=null;
let b=345;
let c=true;  //can also be false
let d= BigInt("678");
let e="saurabh singh";
let f=Symbol("Iam a nice symbol");
let g= undefined;
let h;
console.log(a,b,c,d,e,f,g,h)
console.log(typeof d)
console.log(typeof c)
console.log(typeof h)

//Non primitive data type - Objects in js
const item ={
    "saurabh":true,"sumit":false,
    "shivam":45,"Rohan":undefined

}
console.log(item["shivam"])
console.log(item["sumit"])
console.log(item["xyz"])