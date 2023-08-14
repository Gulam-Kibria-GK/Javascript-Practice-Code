// Loop in one dimensional array program

// declaring an array that has 5 elements

document.write("<br>"+"<br>"+"Array with loop.............................."+"<br>"+"<br>");

var num = [10, 20, 30, 40, 50];

// we can print like following
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);

// but we will use for loop to do this task more easily
for (var i = 0; i < num.length; i++) {
  document.write(num[i]+"<br>");
}

// taking  numbers from user using an array and finding the sum
var numbers = [];
var sum = 0;
var n = parseInt(prompt("how many numbers you want to take? "));
for (var x = 0; x < n; x++) {
  numbers[x] = parseInt(prompt("Enter number : "));
  // numbers.push(parseInt(prompt("Enter number : ")));
  sum = sum + numbers[x];
}
document.write(numbers+"<br>");
document.write("sum is : " + sum+"<br>");