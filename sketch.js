
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const constraint = Matter.Constraint;
var Groundobj,Treeobj,Stoneobj,Launcherobj,Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8,Mango9,Mango10,Mango11,Mango12;
var world,boy;
var launchingForce = 100;
function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;
	Stoneobj= new Stone(235,420,30);
	//Create the Bodies Here.
Groundobj= new Ground(width/2,600,width,20);
Treeobj= new Tree(1050,580);
Launcherobj = new Launcher(Stoneobj.body,{x:235,y:420});
Mango1=new Mango(1100,100,30); 
Mango2=new Mango(1170,130,30);
Mango3=new Mango(1010,140,30); 
Mango4=new Mango(1000,70,30); 
Mango5=new Mango(1100,70,30);
Mango6=new Mango(1000,230,30);
Mango7=new Mango(900,230,25);
Mango8=new Mango(1140,150,25);
Mango9=new Mango(1100,230,25);
Mango10=new Mango(1200,200,25);
Mango11=new Mango(1120,50,25);	
Mango12=new Mango(900,160,25);

	Engine.run(engine);
  
}


function draw() {
  background(230);
  image(boy,200,340,200,300)
  Groundobj.display();
  Treeobj.display();
  Stoneobj.display();
  Launcherobj.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  Mango11.display();
  Mango12.display();

  drawSprites();
 
}
function mouseDragged() { 
	Matter.Body.setPosition(Stoneobj.body, {x:mouseX, y:mouseY}) } 
	function mouseReleased() { 
		Launcherobj.fly();
	}
	
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(Stoneobj.body,{x:235,y:420})
		Launcherobj.attach(Stoneobj.body)
	}
}	





