var neongreen = [0, 200, 0];
var darkgreen = [0, 100, 0];
var eyecolor = [0,100, 0];
var lightgreen = [200, 255, 200];
var cloudX1 = 100;
var cloudX2 = 400;

function setup() 
{
  //create canvas
  createCanvas(560, 1080); 
  
}

function draw() {
  
  background(71, 197, 239);
  
  hill(-100, 1000, 400, 500);
  hill(100, 1000, 700, 600);
  hill(0, 1000, 600, 400);
  
  clouds(cloudX1, 70, 100, 100);
  clouds(cloudX2, 150, 150, 100);
  cloudX1+=2;
  cloudX1 = cloudX1%560;
  cloudX2+=2;
  cloudX2 = cloudX2%560;
  
  
  translate(mouseX-300, mouseY-300);

  head();
  body();
  armslegs();

}

function head()
{
  //light green eyes
  noStroke();
  fill(lightgreen);
  ellipse(220, 120, 120, 160);  
  ellipse(340, 120, 120, 160);  
  
  //dark green pupil
  fill(eyecolor);
  ellipse(220, 120, 40);  
  ellipse(340, 120, 40);
  
  //neon green face
  fill(neongreen);
  ellipse(280, 320, 400, 250);
  
  //pink mouth
  fill(255, 0, 0);
  triangle(200, 320, 360, 320, 280, 400);
}

function body()
{
  //neon green triangle body
  fill(neongreen);
  triangle(280, 445, 80, 840, 480, 840);
  
  //yellow triangle belly
  fill(216, 279, 78);
  triangle(280, 525, 400, 800, 160, 800); 
}

function armslegs()
{
  //dark green legs
  fill(darkgreen)
  rect(160, 840, 80, 150);
  rect(320, 840, 80, 150);
  
  //dark green hands
  fill(darkgreen);
  ellipse(120, 640, 110);
  ellipse(440, 640, 110);
}

function keyPressed()
{
  neongreen = [random(256), random(256), random(256)];
  darkgreen = [random(256), random(256), random(256)];
  head();   
  body();
  armslegs();
}

function mousePressed()
{
  eyecolor = lightgreen;
  head();
}

function hill(x,y,w,h)
{
  fill(color(242, 101, 204));
  arc(x+(w/2), y, w, h, PI, 0, PIE);
}

function clouds(x, y, w, h)
{
  fill(color(255, 255, 255));
  noStroke();
  ellipse(x, y, w, h);
  ellipse(x+50, y, w, h);
}
