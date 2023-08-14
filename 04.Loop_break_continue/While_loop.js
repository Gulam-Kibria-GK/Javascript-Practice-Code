//A program to demonstrate while loop
// while loop syntax

document.write("<br>"+"<br>"+"While loop.............................."+"<br>"+"<br>");


let j = 1;
while (j <= 10) {
  document.write("Bangladesh" + "<br>");
  j++;
}

document.write("End of for loop"+"<br>"+"j = "+j+"<br>");

// sum of numbers 1+2+..+100
var sum = 0;
var x = 1;
while (x <= 100) {
  sum = sum + x;
  x++;
}
document.write(sum);