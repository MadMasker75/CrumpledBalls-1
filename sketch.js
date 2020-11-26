const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var recta,rec,rectan;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	recta = createSprite(270, 610, 20, 100, {isStatic:true});
	recta.shapeColor = "red";

	rec = createSprite(470, 610, 20, 100, {isStatic:true});
    rec.shapeColor = "red";

	rectan = createSprite(370,650,200,20, {isStatic:true})
	rectan.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,200,30);
	ground = new Ground(600,670,1200,20);

	leftone = Bodies.rectangle(570, 610, 20, 100, {isStatic:true});
	World.add(world, leftone);

	rightone = Bodies.rectangle(770,610,20,100, {isStatic:true});
	World.add(world, rightone);

	downone = Bodies.rectangle(670,650,200,20, {isStatic:true});
	World.add(world, downone);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();

  recta.x= leftone.position.x ;
  recta.y= leftone.position.y;

  rec.x= rightone.position.x ;
  rec.y= rightone.position.y;

  rectan.x= downone.position.x ;
  rectan.y= downone.position.y;

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});
	   
	 }
   }