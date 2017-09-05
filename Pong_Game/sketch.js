var paddleLeft_x, paddleRight_x, paddle_y;
var ball_x, ball_y;
var direction_x;
var angle;
var bounces;



function setup()
{
  createCanvas(800, 600);
  
  paddleLeft_x = 0;
  paddleRight_x= 750;
  paddle_y = 200;
  ball_x = 400;
  ball_y = 300;
  bounces = 0;
  direction = 5;
  angle=0;
  
  
}

function draw() 
{
  background(0);
   
  noStroke();
  fill(255);
  rect(paddleLeft_x, paddle_y, 50, 200);
  rect(paddleRight_x, paddle_y, 50, 200);
  
  fill(0, 0, 200);
  ellipse(ball_x, ball_y, 50);
  
  displayBounces();
  movePaddle();
  moveBall();
  hitPaddle();
  hitWall();
  gameover();
  
 
  
}

function displayBounces() {
  fill(150);
  textSize(30);
  text("Bounces: " +bounces,10,40);
}

function hitPaddle()
{
   if(ball_x == paddleRight_x-25 && ball_y >= paddle_y && (ball_y <= paddle_y+200))
  {
    direction *= -1;
    angle = random(-5, 5);
    moveBall();
    bounces+=1;
  }

  if((ball_x == paddleLeft_x+75) && ball_y>= paddle_y && (ball_y <= paddle_y+200) )
  {
    direction *= -1
    angle = random (-5, 5);
    moveBall();
    bounces+=1;
  }

}

function moveBall()
{
  ball_x += direction;
  ball_y += angle;
}

function hitWall()
{
  if(ball_y >= 575)
  {
    angle = random(-5,0);
    moveBall();
  }
  else if(ball_y <= 25)
  {
    angle = random(1, 6);
    moveBall();
  }
}

function movePaddle()
{
  if(keyIsDown(UP_ARROW) && paddle_y > 0)
    paddle_y -= 5;
  if(keyIsDown(DOWN_ARROW) && paddle_y < height - 200)
    paddle_y += 5; 
}

function gameover()
{
  if(ball_x > 800 || ball_x <0)
  {
    background(0);
    textSize(100);
    fill(255, 0, 0);
    text("GAME OVER", 100, 300);
    
    textSize(50);
    fill(255);
    text("Total Bounces: "+bounces, 100, 400);
    
    button = createButton('RESET');
    button.position(700, 10);
    button.mousePressed(setup);
  }
}