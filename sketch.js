
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,paper,bottomWall,leftWall,rightWall;

function preload()
{
	dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,690,width,30);
	paper=new Paper(100,600,70);
	bottomWall=new Dustbin(1300,665,170,20);
	leftWall=new Dustbin(1205,615,20,120);
	rightWall=new Dustbin(1395,615,20,120);

	/*var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
		width:1600,
		height:700,
		wireframes:false
		}
		});
		
		Render.run(render);*/

	Engine.run(engine);
  
}


function draw() {
  
  background("lightskyblue");
  ground.display();
  paper.display();
  bottomWall.display();
  leftWall.display();
  rightWall.display();

  imageMode(CENTER)
  image(dustbinImg,1300,600,250,150);
  console.log(paper)
  drawSprites();
 
}

/*keyPressed function is not called in the draw 
because it is a predefined function and it trigers automatically when specified key is pressed*/
function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("hello");
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



