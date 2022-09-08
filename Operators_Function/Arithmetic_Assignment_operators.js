// //you can run this program by using the command =>   node program7 .js or adding this file in html

// Arithmetic operator -> +, -, *, / , %, ++, --, ** (exponentiation)
// Assignment operator -> =, +=, -=, *=, /=, %=

document.write("<br>"+"<br>"+"Arithmetic & Assignment.............................."+"<br>"+"<br>");


var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
var lineBreak = "<br/>";

let aa=num1, bb=num2

aa += bb;
document.write("The output is : " + aa + lineBreak);

aa -= bb;
document.write("The output is : " + aa + lineBreak);

aa *= bb;
document.write("The output is : " + aa + lineBreak);

aa /= bb;
document.write("The output is : " + aa + lineBreak);

aa %= bb;
document.write("The output is : " + aa + lineBreak);


num1++
num2--

var result = num1 + num2;
document.write("The sum is : " + result + lineBreak);

result = num1 - num2;
document.write("The sub is : " + result + lineBreak);

result = num1 * num2;
document.write("The multiplication is : " + result + lineBreak);

result = num1 / num2;
document.write("The division is : " + result + lineBreak);

result = num1 % num2;
document.write("The remainder is : " + result + lineBreak);