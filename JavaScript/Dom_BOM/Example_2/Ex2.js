let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="green";
div.style.fontSize="20px";
//div.innerText="Hello!";
//div.style.visibility="hidden";

let Id=div.getAttribute("id");
console.log(Id);
let Name=div.getAttribute("name");
console.log(Name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);
//div.append(newbtn);
div.after(newbtn);
//div.before(newbtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi I am New</i>";
document.querySelector("body").prepend(newHeading);
