// DOM -> Document Object Model
// Using DOM We can Find / get, change, add, or delete HTML elements.

// How to find HTML Elements 
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()

// getElementById


//document.getElementById("idname").innerHTML="Hello";
var variable1=document.getElementById("idname")
variable1.innerHTML="Hello";

// getElementsByTagName

var variable2=document.getElementsByTagName("h1");
variable2[1].innerHTML="Change name";

//getElementsByClassName

var variable3=document.getElementsByClassName("cname");
variable3[0].innerHTML="01729290....";

//querySelector ...always get 1st element

var variable4=document.querySelector("#idname");
variable4.innerHTML="Hello change";

var variable5=document.querySelector(".cname");
variable5.innerHTML="selctor change";

var variable6=document.querySelector("h1");
variable6.innerHTML="Hello change last";

document.querySelector(".my-class a").innerHTML="new test";

//querySelectorAll ...always get array element

var variable7=document.querySelectorAll("#idname");
variable7[0].innerHTML="Hello change final";

var variable8=document.querySelectorAll(".cname");
variable8[1].innerHTML="selctor change 2";

var variable9=document.querySelectorAll("h1");
variable9[2].innerHTML="again change";
