// Relational Operator : >, >=, <, <=,
//  ==(for checking only value), ===(for checking value and data type), !=, !==
// Logical Operator : &&, ||, !

// Relational and logical operators return true / false

document.write("<br>"+"<br>"+"Relational & logical operators.............................."+"<br>"+"<br>");


var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

newline= "<br>"
document.write(num1 > num2);
document.write(newline)
document.write(num1 >= num2);
document.write(newline)
document.write(num1 < num2);
document.write(newline)
document.write(num1 <= num2);
document.write(newline)
document.write(num1 == num4);
document.write(newline)
document.write(num1 != num4);
document.write(newline)
document.write(num1 === num3);
document.write(newline)
document.write("num2 === num3 : " + (num2 === num3));
document.write(newline)
document.write("num2 == num3 : " + (num2 == num3));
document.write(newline)
document.write(num1 !== num3);
document.write(newline)

// logical operators helps us to compine multiple conditions
document.write(num1 > num2 && num1 > num5);
document.write(newline)
document.write(num1 > num2 || num1 > num5);
document.write(newline)

//Arithmetic operator -> +, -, *, / , %, ++, --, ** (exponentiation)
// Arithmetic Assignment operator