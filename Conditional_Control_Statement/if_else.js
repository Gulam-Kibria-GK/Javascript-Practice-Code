// conditional control statement -> if, else if, else, switch

// a program that will find a large number between 2 numbers

document.write("<br>"+"<br>"+"If Else.............................."+"<br>"+"<br>");


var num1 = parseInt(prompt("Enter first numebr : "));
var num2 = parseInt(prompt("Enter second numebr : "));

// first method - using only if
if (num1 > num2) {
  document.write("Large Number is : " + num1+"<br>");
}
if (num1 < num2) {
  document.write("Large Number is : " + num2+"<br>");
}
if (num1 == num2) {
  document.write("Equal numbers"+"<br>");
}

// second method - more efficient than first method
if (num1 > num2) {
  console.log("Large Number is : " + num1+"<br>");
} else if (num1 < num2) {
  console.log("Large Number is : " + num2+"<br>");
} else {
  console.log("Equal numbers"+"<br>");
}