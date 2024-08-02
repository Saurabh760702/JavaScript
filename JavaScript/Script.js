// console.log("Hello!");
// alert("Saurabh singh mca");
// window.console.log("hi");
// console.dir(window.document);
// console.dir(document.body);
// console.log(document.body);

// console.dir(document.head);
// console.log(document.head);
 let heading = document.getElementById("heading");//h1
 console.log(heading);
 console.dir(heading);
let headings=document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);
let button=document.getElementById("myId");
console.dir(button);
console.log(button);

let parahs=document.getElementsByTagName("p");
console.dir(parahs);

let firstelements=document.querySelector("p");
console.dir(firstelements);
let allelements=document.querySelectorAll("p");
console.dir(allelements);

let firstclass=document.querySelector(".myClass");
console.dir(firstclass);
let allcolass=document.querySelectorAll(".myClass");
console.dir(allcolass);
let butt=document.querySelector("#myId");
console.dir(butt);

let div=document.querySelector("div");
console.dir(div);