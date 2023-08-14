// Array methods program

// you have already learned about pop(),push(),concat()
// shift(), unshift(), splice(pos,noe,ele1,ele2..), splice(start INDEX,end INDEX), slice(4)
// sort(), reverse()

document.write("<br>"+"<br>"+"Array methods.............................."+"<br>"+"<br>");


var names = ["Mina", "Rabeya", "Kolpona", "Anis"];
document.write(names+"<br>");

// // shift opposite of pop
names.shift();
document.write("shift opposite of pop  ->" +names+"<br>");

// // unshiftt opposite of push
names.unshift("Sagor");
document.write("unshiftt opposite of push  ->"+ names+"<br>");

// adding elements using splice
names.splice(2,1,"Karim","Rahim");
document.write("adding elements using splice  ->"+ names+"<br>");

// removing elements using splice
names.splice(1,2);
document.write("removing elements using splice  ->"+names+"<br>");

// slice
var newArray = names.slice(1);
document.write("After slice  ->"+ newArray+"<br>");
document.write("Before slice  ->"+names+"<br>");

var sortedNames = names.sort();
document.write("After sort  ->"+sortedNames+"<br>");
document.write("Before rev  ->"+names+"<br>");
names.reverse();
document.write("After rev  ->"+names+"<br>");

var numbers = [20, 5, 25, 45, 1];
numbers.sort(function (a, b) {
  return b - a;
});
document.write(numbers);