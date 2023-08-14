

function Print(ss){

    var hh1=document.createElement("h4");
    var tx=document.createTextNode(ss);
    
    hh1.appendChild(tx);

    hh1.style.color="red";

    var printdiv=document.getElementsByClassName("print");
    printdiv[0].appendChild(hh1);
    
}

// Downwards
const studentlist= document.querySelector(".student-list");
//const st1=document.querySelectorAll(".s");// normal traversing
const st1=studentlist.querySelectorAll(".s");
Print(st1[1].innerHTML);

const st2=studentlist.children[3]
Print(st2.innerHTML);


// upwards

const st3=document.querySelectorAll(".s");
const par=st3[3].parentElement;

Print(par.innerHTML);


// sildweys

const st4=document.querySelectorAll(".s");
const sib1=st4[3].nextElementSibling;
const sib2=st4[3].previousElementSibling;

Print(sib1.innerHTML);
Print(sib2.innerHTML);


