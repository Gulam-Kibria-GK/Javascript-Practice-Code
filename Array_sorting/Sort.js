//sorting program

// The sort() method sorts an array alphabetically:

document.write("<br>"+"<br>"+"Sort.............................."+"<br>"+"<br>");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits
document.write("Sorts the elements of fruits = "+fruits+"<br>");

fruits.reverse(); // Then reverse the order of the elements
document.write("reverse the order of the elements = "+fruits+"<br>");


// You can fix this by providing a compare function:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  document.write(a + " , " + b+"<br>");
  return a - b;
});

document.write("Final = "+points+"<br>");


// se the same trick to sort an array descending:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});
document.write("Final = "+points+"<br>");

/*
The Compare Function
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.
Example:
The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/