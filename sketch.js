
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3,dustbin4;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(930,408,230,250);
	dustbin2 = new Dustbin(1130,428,20,230);
	dustbin3 = new Dustbin(923,428,20,230);

	ground = new Ground(width/2,662,width*2,20)
	//dustbin4 = new Dustbin(650,648,200,50);

	paper = new Paper();

//console.log(paper.position.x)

	Engine.run(engine);
  
	//paper = new Paper(300,200,20);
}


function draw() {
  rectMode(CENTER);
  background(100,100,120);
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}


function keyPressed()
{if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:1080,y:-1085});
}




}
