
// number 
//you can run this program by using the command =>   node program6 .js or adding this file in html

document.write("<br>"+"<br>"+"Number.............................."+"<br>"+"<br>");

/*
const num = 20;
num = num.toString(); not work
document.write(typeof num+"<br>");
*/

let number = 20;
document.write(typeof number+"<br>");

number = toString(20);
document.write(typeof number+"<br>");

var x = 2.56789;
// number of characters after the decimal point
document.write(x.toFixed(1)+"<br>");
document.write(x.toFixed(2)+"<br>");

// total number of characters including the decimal point
document.write(x.toPrecision(1)+"<br>");
document.write(x.toPrecision(2)+"<br>");

document.write(Number(true)+"<br>");
document.write(Number(false)+"<br>");
document.write(Number(" 10")+"<br>");
document.write(Number(" 10 ")+"<br>");
document.write(Number("10.25")+"<br>");

