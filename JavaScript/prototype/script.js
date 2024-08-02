let a={
    Name:"saurabh singh",
    language:"Javascript",
    run:()=>{
        alert("self run")
    }
}
console.log(a)

let p={          //prototype
    run:()=>{
        alert("run")
    }

}
p.__proto__={
    name:"shivam singh"
}

a.__proto__=p
a.run()
console.log(a.name)