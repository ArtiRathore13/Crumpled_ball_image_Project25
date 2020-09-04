
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1,dustbin2,dustbin3;
var Ground1;
var paper1;




function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Ground1=new Ground(400,390,800,10);
	dustbin1=new Dustbin(600,330,10,95);
	dustbin2=new Dustbin(700,330,10,95);
	dustbin3=new Dustbin(730,380,150,10);
	paper1=new Paper(100,300,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS);
  background("lightgrey");

  Ground1.display();
  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();
  paper1.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:41.5,y:-37.5});
	}
	
}


