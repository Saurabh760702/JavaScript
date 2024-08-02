let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" From Apna college";

let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs)
    {
        div.innerText=`new unique value ${idx}`;
        idx++;
        // console.log(div);
        // console.log(div.innerText);
    }


// divs[0].innerText="New unique value 1";
// divs[1].innerText="New unique value 2";
// divs[2].innerText="New unique value 3";
