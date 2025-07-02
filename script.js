//your JS code here. If required.
const value=document.getElementById("value");
const button=document.getElementById("button");
let value1=0;
button.addEventListener("click",()=>{
            value1=value1+1;
	value.innerText=`value is ${value1}`;
        });