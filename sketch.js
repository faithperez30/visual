let bgColor;
let myDiv;

function setup() {
  createCanvas(400, 400, WEBGL);
  bgColor = random(255); 

  myDiv = createDiv('Bye Your Life. Goodnight');
  myDiv.style('font-family', 'Inconsolata');
  myDiv.position(20, 50);
  myDiv.style('background-color', '#fff');
}

function draw() {
  background(bgColor);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(80)
//text("Bye Your Life. Goodnight",50,50)
}

function mousePressed() {
  bgColor = random(255); 
  myDiv.position(random(255), random(255));
}


