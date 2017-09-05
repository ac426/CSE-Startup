var monster_img;
var cookie_img;
var cake_img;
var pie_img;
var broccoli_img;
var points;
var missed;
var monster_x, monster_y;
var cookie_x, cookie_y;
var pie_x, pie_y;
var cake_x, cake_y;
var broccoli_x, broccoli_y;
var button;
var speed;


function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
  broccoli_img = loadImage("assets/broccoli.png");
}

function setup() {
  createCanvas(720, 400);
  

  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  points = 0;
  missed = 0;
  pie_x = random(725, 2000); 
  pie_y = random(350);
  cake_x = random(725, 2000); 
  cake_y = random(350);
  broccoli_x = random(1500, 2500); 
  broccoli_y = random(350);
  speed = 4;
}

function draw() {

  background(200);
  displayPoints();
  displayMissed();
  
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  image(pie_img, pie_x, pie_y);
  image(cake_img, cake_x, cake_y);
  image(broccoli_img, broccoli_x, broccoli_y, broccoli_img.width/6, broccoli_img.height/6);

  moveCookie();
  moveMonster();
  movePie();
  moveCake();
  moveBroccoli();
  checkForChomp();
  
  if(missed>=3)
  {
    textSize(60);
    fill(255, 0, 0);
    cookie_x=0;
    cookie_y=175;
    monster_x=300;
    monster_y=240;
    pie_x=0;
    pie_y=250;
    cake_x = 0;
    cake_y = 320;
    broccoli_x = 0
    broccoli_y = 90;
    text("GAME OVER", 200, 200);
    
    button = createButton('RESET');
    button.position(650, 10);
    button.mousePressed(setup);
    
    
  } 
  
}

function displayPoints() {
  fill(150);
  textSize(30);
  text("Points: " +points,10,40);
}

function displayMissed()
{
  fill(250, 0, 0);
  textSize(30);
  text("Missed: "+missed, 10, 80);
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    missed+=1;
  }
  else 
    cookie_x -= speed;
}

function movePie() {
  if(pie_x < 0) {
    pie_x = random(1000, 2000);
    pie_y = random(350);
  }
  else 
    pie_x -= 4;
}

function moveCake() {
  if(cake_x < 0) {
    cake_x = random(1000, 2000);
    cake_y = random(350);
  }
  else 
    cake_x -= 4;
}

function moveBroccoli() {
  if(broccoli_x < 0) {
    broccoli_x = random(2000, 3000);
    broccoli_y = random(350);
  }
  else 
    broccoli_x -= 4;
}
function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 3;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 3;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 3;
  if(keyIsDown(RIGHT_ARROW) && monster_x < 580)
    monster_x += 3;
}

function checkForChomp() {
  var cookieDist = dist(cookie_x, cookie_y, monster_x, monster_y);
  var pieDist = dist(pie_x, pie_y, monster_x, monster_y);
  var cakeDist = dist(cake_x, cake_y, monster_x, monster_y);
  var broccoliDist = dist(broccoli_x, broccoli_y, monster_x, monster_y);
  if (cookieDist < 100) {
    points += 1;
    speed+=1.5;
    cookie_x = 725;
    cookie_y = random(350);
  }
  if(pieDist < 100)
  {
    missed+=1;
    pie_x = random(1000, 2000);
    pie_y = random(350);
  }
  if(cakeDist < 100)
  {
    missed+=1;
    cake_x = random(1000, 2000);
    cake_y = random(350);
  }
  if(broccoliDist < 100)
  {
    if(missed>0)
    {
      missed-=1;
    }
    broccoli_x = random(2000, 3000);
    broccoli_y = random(350);
  }
    
   
}
