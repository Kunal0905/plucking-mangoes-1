
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bi,ti;
var g;
var m1,m2,m3,m4,m5,m6;
var s;
var r;

function preload()
{
 bi = loadImage("boy.png");
 ti = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var options = {
	isStatic: true
}
  g = Bodies.rectangle(400,680,800,30,options);
  World.add(world,g)
  m1 = new Mango(600,250,40,40);
  m2 = new Mango(560,320,40,40);
  m3 = new Mango(630,320,40,40);
  m4 = new Mango(520,380,40,40);
  m5 = new Mango(595,380,40,40);
  m6 = new Mango(665,380,40,40);
  s = new Stone(50,520,30,30);
  r = new Rope({x: 80, y: 560},s.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  image(bi,70,520,150,150)
  image(ti,450,190,300,500)
  fill("blue")
  rect(g.position.x,g.position.y,800,30);
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  s.display();
  r.display();
  detectCollision(s,m1);
  detectCollision(s,m2);
  detectCollision(s,m3);
  detectCollision(s,m4);
  detectCollision(s,m5);
  detectCollision(s,m6);
  
  drawSprites();
 
}
function mouseDragged(){
  //if(gameState == "onSling"){
    Matter.Body.setPosition(s.body,{x: mouseX, y: mouseY});
  //}
}

function mouseReleased(){
  r.fly();
}

function detectCollision(lstone,lmango){
  mBodyPos = lmango.body.position;
  sBodyPos = lstone.body.position;

  var distance = dist(mBodyPos.x,mBodyPos.y,sBodyPos.x,sBodyPos.y);
 if(distance <= lmango.r + lstone.r){
   Matter.Body.setStatic(lmango.body,false);
 }

}



