const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var launch, shoot;
var engine, world;
var base, standa, standb;
var score = 0;

var bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8, bk9, bk10, bk11, bk12, bk13, bk14, bk15;
var gameState = "onSling";

function preload(){
  bg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  
  base = new Ground(width/2, height-10, width, height/20)
  standa = new Ground(350, 200, width/3, height/40);
  //standb = new Ground();

  //level1
  bk1 = new Box(350, 200-20, (width/4)/6, 25);
  bk2 = new Box(325, 200-20, (width/4)/6, 25);
  bk3 = new Box(300, 200-20, (width/4)/6, 25);
  bk4 = new Box(275, 200-20, (width/4)/6, 25);
  bk5 = new Box(375, 200-20, (width/4)/6, 25);
  //level2
  bk6 = new Box(305, 200-50, (width/4)/6, 25);
  bk7 = new Box(275, 200-50, (width/4)/6, 25);
  bk8 = new Box(335, 200-50, (width/4)/6, 25);
  bk9 = new Box(385, 200-50, (width/4)/6, 25);
  //level3
  bk10 = new Box(370, 200-80, (width/4)/6, 25);
  bk11 = new Box(330, 200-80, (width/4)/6, 25); 
  bk12 = new Box(290, 200-80, (width/4)/6, 25);
  //level4
  bk13 = new Box(350, 200-110, (width/4)/6, 25);
  bk14 = new Box(310, 200-110, (width/4)/6, 25);
  //level5
  bk15 = new Box(330, 200-130, (width/4)/6, 25);

  shoot = new Body(100, 50)
  launch = new SlingShot(shoot.body,{x:100, y: 50});

}

function draw() {
  background(bg); 
  Engine.update(engine);
  
  base.display();
  standa.display();

  //all the blocks
  bk1.display();
  bk2.display();
  bk3.display();
  bk4.display();
  bk5.display();

  bk6.display();
  bk7.display();
  bk8.display();
  bk9.display();
  
  bk10.display();
  bk11.display();
  bk12.display();

  bk13.display();
  bk14.display();

  bk15.display();
  

  shoot.display();
  launch.display();

  bk1.score();
  bk2.score();
  bk3.score();
  bk4.score();
  bk5.score();
  bk6.score();
  bk7.score();
  bk8.score();
  bk9.score();
  bk10.score();
  bk11.score();
  bk12.score();
  bk13.score();
  bk14.score();  
  bk15.score();
  
  text("Score:"+score, 700, 40);
  drawSprites();
}

function mouseDragged(){
  if (gameState !== "launch"){
  Matter.Body.setPosition(shoot.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  launch.fly();
  gameState = "launch";
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(shoot.body);
  }
}