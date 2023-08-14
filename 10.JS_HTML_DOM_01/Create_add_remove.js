//Create, remove, add html element


var head1=document.createElement("h1");
var text=document.createTextNode("Hi");

head1.appendChild(text);

var mydiv=document.getElementsByClassName("my-div");
mydiv[0].appendChild(head1)

var head2=document.querySelectorAll(".my-div h1")[1];
mydiv[0].removeChild(head2);


var head3=document.createElement("h3");
var text1=document.createTextNode("I love Allah")

head3.appendChild(text1);

var loc=document.querySelectorAll(".my-div h1");
mydiv[0].insertBefore(head3, loc[0]);

