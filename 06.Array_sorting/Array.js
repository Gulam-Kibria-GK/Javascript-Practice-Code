// Array -> is a collection of variables
// Array VS Object -> arrays use numbered indexes. but, objects use named indexes.

// creating an array with 20 variables

document.write("<br>"+"<br>"+"Array.............................."+"<br>"+"<br>");


var names = new Array(20);

//array index always start with 0
names[0] = "Anisul";
names[1] = "Sonali";

//printing an array elements
document.write(names[1]);
document.write("<br>");

// creating an array with values
var students = ["Anisul", "Sonali", "Priya", "Numan"];
document.write("students = " + students);
document.write("<br>");
document.write("studnet at 2 index : " + students[2]);
document.write("<br>");

//finding the length of an array
document.write("Length of student array : " + students.length);
document.write("<br>");

//pusing an element in array
students.push("musa");
document.write("after pushing students = " + students);
document.write("<br>");
//pusing an element in array
students.pop("musa");
document.write("after poping students = " + students);
document.write("<br>");

// concatenation of arrays
var num1 = [10, 20];
var num2 = [30, 40, 50, 60];
var num = num1.concat(num2);
document.write("After concatenation : " + num);