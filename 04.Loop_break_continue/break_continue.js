// break and continue  program

// The break statement "jumps out" of a loop or switch.

document.write("<br>"+"<br>"+"Break & Continue.............................."+"<br>"+"<br>");


for (var i = 1; i <= 100; i++) {
    if (i == 10) break;
    document.write(i + "<br/>");
  }
  document.write("<br/>");
  // The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
  for (var i = 1; i <= 10; i++) {
    if (i == 5) continue;
    document.write(i + "<br/>");
  }