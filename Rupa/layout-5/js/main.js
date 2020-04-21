// fit text



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
  




// waves

let xs = []
for (var i = 0; i <= 500; i++) {
  xs.push(i)
}

let t = 0

function animate() {
  
  let points = xs.map(x => {
    
    let y = 200 + 8 * Math.sin((x + t) / 10)
    
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  
  document.querySelector("path").setAttribute("d", path)
  document.querySelector("#path2").setAttribute("d", path)
  document.querySelector("#path3").setAttribute("d", path)

  
  t += 0.5
  
  requestAnimationFrame(animate)
}

animate()




