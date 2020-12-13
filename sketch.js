
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var applyForce=Matter.ApplyForce;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ball=new Paper(100,300,22);
	ground=new Ground(400,690,810,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  ground.display();
  keyC();
  drawSprites();
 
}
function keyC(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


