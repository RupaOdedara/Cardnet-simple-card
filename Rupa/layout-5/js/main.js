// right triangle
var triangle = document.getElementById('top-triangle');
var context = triangle.getContext('2d');

context.beginPath();
context.moveTo(75,75);
context.lineTo(10,75);
context.lineTo(10,25);
context.fillStyle = "#e47622";
context.fill();
  


// circle
var circle = document.getElementById('left-circle');
var context = circle.getContext('2d');

context.beginPath();
context.arc(100, 115, 60, 0, 2 * Math.PI);
context.fillStyle = '#f57c21';
context.fill();
   
//bottom trangle 
var triangle = document.getElementById('left-white-triangle');
var context = triangle.getContext('2d');

context.beginPath();
context.moveTo(75,75);
context.lineTo(10,75);
context.lineTo(10,25);
context.fillStyle = "#FFFFFF";
context.fill();
  