
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy,boyimg , tree;
var mango,mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boyimg=loadImage("images/mango.png");
	//tree=loadImage("Plucking mangoes/mango.png");
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
    ground=new Ground(500,790,1400,10); 
	stone=new Stone( 235,420,30);
	
	mango1=new Mango(1000,500,50);
	mango2=new Mango(900,550,70);
	mango3=new Mango(950,500,50);
	mango4=new Mango(920,550,30);
	mango5=new Mango(970,500,50);
	Engine.run(engine);

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,340,200,300);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
 
}

function mouseDragged(){

Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});

}

function mouseRealsed(){
boy.fly();
	
}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x: 235,y:420 });
		launcher.attach(stone.body);
	}
}
function detectCollision(stone,mango){
mangoBodyPosition=mango.Body.position;
stoneBodyPosition=stone.Body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}

}


