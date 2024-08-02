let arr=[45,23,21]
//console.log(arr)
//Array Map mathods
let a=arr.map((value,index,array )=>{
    console.log(value,index,array)
    return value+index
})
console.log(a, arr)


//Array Filter methods
let arr2=[45,23,21,0,9,7,7,3,5]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2,arr2)


//Array Reduce Methods
// let arr3=[1,,2,3,4,8,6,9,5]
// let b=arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(b)

let arr3=[1,,2,3,4,8,6,9,5]
const reduce_func=(h1,h2)=>{
    return h1+h2
}
let b=arr3.reduce(reduce_func)
console.log(b)