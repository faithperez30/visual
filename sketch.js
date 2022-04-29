let bgColor;

function setup() {
  createCanvas(400, 400, WEBGL);
  bgColor = random(255); 
  let myDiv = createDiv('Bye Your Life. Goodnight');
  myDiv.style('font-family', 'Inconsolata');
  myDiv.position(50, 100);
}// six-digit hexadecimal RGB notation



function draw() {
  background(bgColor);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(80)
//text("Bye Your Life. Goodnight",50,50)
}

function mousePressed() {
  bgColor = random(255); 
}

