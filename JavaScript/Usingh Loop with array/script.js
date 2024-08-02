let num =[3,5,56,8,9]
//For loop
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//For each loop
num.forEach((element)=>{
    console.log(element*element)
})

//Array.from
let name="saurabh singh"
let arr=Array.from(name)
console.log(arr)


//for of
for(let item of num){
    console.log(item)
}

//for in
for(let i in num){
    console.log(i)
}