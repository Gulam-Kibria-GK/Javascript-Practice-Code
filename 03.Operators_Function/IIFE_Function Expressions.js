// IIFEs (Immediately Invokeable Function Expressions)

document.write("<br>"+"<br>"+"Immediately Invokeable Function Expressions.............................."+"<br>"+"<br>");


 (function display(message) {
   document.write(message);
 })('hi');

// Function Expressions

document.write("<br>"+"<br>"+"Function Expressions.............................."+"<br>"+"<br>");

var display2 = function displayMessage(msg) {
    document.write(msg);
  };
  
  display2("I am message");
  
  // ( ), { }, [ ], < >
  // Task 7: create an IIFEs that print sum of 2 numbers