
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ourworld,ourengine, paper, ground, groundSprite,debounce;
var RB1, RB2, RB3;
var bin, binImage;

debounce = true;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ourengine = Engine.create();
	ourworld = ourengine.world;

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,480);

	ground = new Box(width/2, 500, width, 25);
	RB1 = new Bin(700, 490, 150, 15);
	RB2 = new Bin(760, 430, 10, 110);
	RB3 = new Bin(640, 430, 10, 110);
  Engine.run(engine);
  
  bin = createSprite(700, 430, 150, 15)
  binImage = loadImage("sprites/dustbingreen.png");
}


function draw() {
  Engine.update(ourengine);
  rectMode(CENTER);
  background(150);
  paper.display(); 
  ground.display();
  //RB1.display();
  //RB2.display();
  //RB3.display();
  bin.addImage('binSprite',binImage)
  bin.scale = 0.4
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW && debounce === true) {
     Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-150});
     debounce = false;
  }
}


