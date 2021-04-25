class Mango{
 constructor(x,y,r){
     var op = {
         isStatic: true,
         friction: 0.8
     }
  this.body = Bodies.circle(x,y,r,op);
  World.add(world,this.body)
  this.r = r;
  this.image = loadImage("mango.png");
 }
 display(){
  imageMode(CENTER)
  image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

 }
}