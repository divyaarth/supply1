var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxSprite,box1Sprite,box2Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite=new BoxSprite(width/2, 650, 200,20);
	box1Sprite=new BoxSprite(300, 600, 20,100);
	box2Sprite=new BoxSprite(500, 600, 20,100);
    boxSprite.shapeColor =color("green");
	box1Sprite.shapeColor =color("green");
	box2Sprite.shapeColor =color("green");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	/*boxSprite = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, boxSprite);
	box1Sprite = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, box1Sprite);
	box2Sprite = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, box2Sprite);*/
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
  Matter.Body.setStatic(packageBody,false);  
  //Matter.Body.setStatic(< body Name >, false);
  }
}



