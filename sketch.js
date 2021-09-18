//Code Structure for project of c21

//variables are declared.
var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  
  //image loading instructions are below. add the images first to your folder under a sub folder images then theses codes will work.
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
  move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
  drink = loadAnimation("images/drink1.png","images/drink1.png","images/drink2.png","images/drink2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  //add the animation to the sprite
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1 ;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  //add the text function for add ing the instructions.one is done.
  
  text("Up Arrow = Brushing",20, 55);
  text("Down_Arrow = gymming",20,55);
  text("Right_Arrow = bathing",20,50);
  text("Left_Arrow = eating",20,50);
  text("m = moving",20,50);
  
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    // add the code what will happen if Down arrow is pressed.
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    //add the code what will happen if Left arrow is pressed.
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  
  if(keyDown("RIGHT_ARROW")){
    //add the code what will happen if Right arrow is pressed.
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
  //add the code what will happen if m is pressed.
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}
}