var c=document.getElementById("myCanvas");

var ctx=c.getContext("2d");

ctx.lineWidth=3;
ctx.strokeStyle="black";
ctx.strokeRect(9,9,682,282);

ctx.fillStyle="green";
ctx.fillRect(10,10,678,280);

var CX=c.width/2;
var CY=c.height/2;

ctx.beginPath();
ctx.arc(CX,CY,80,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();
