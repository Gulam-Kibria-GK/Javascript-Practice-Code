// A program to demonstrate do while loop
// do while loop syntax

document.write("<br>"+"<br>"+"do While loop.............................."+"<br>"+"<br>");

var i;
do {
  document.write("Bangladesh" + "<br>");
  i++;
} while ( i <= 10);

document.write("End of for loop"+"<br>"+"i = "+i+"<br>");

// sum of numbers 1+2+..+100
var sum = 0;
var x = 1;
do {
  sum = sum + x;
  x++;
} while (x <= 50);
document.write(sum);