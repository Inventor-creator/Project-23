var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	boxplacement = helicopterSprite.x

	heliOptions ={
		isStatic :true
	}

World.add(world,heliOptions)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

var	pakageOptions = {
	restitution = 1
}

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody,pakageOptions);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
box1 = createSprite(10,700,20,200)
box2 = createSprite(10,700,10,20)
box3 = createSprite(10,700,10,20)
Matter.box1.setStatic(box1,isStatic)
box2.x = box1.x+100
box3.x = box1.x-100;
box1.x = helicopterSprite.x

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 




  packageSprite.y= packageBody.position.y 
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   packageSprite=createSprite(width/2, 80, 10,10);
	   packageSprite.addImage(packageIMG)
	   packageSprite.scale=0.2
	   packageBody.position.x = helicopterSprite.x
	   packageBody.position.y = helicopterSprite.y

   World.add(world,packageSprite,pakageOptions)
	 }
   }



