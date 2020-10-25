const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground;

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(10,650,10);
  
  dustbin1 = new Dustbin(680,660,200,20);
  dustbin2 = new Dustbin(580,620,20,100);
  dustbin3 = new Dustbin(780,620,20,100);
  
  ground = new Ground(400,680,800,20);

  Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
  }
}

