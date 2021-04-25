class Rope{
 constructor(point1,body2){
   var op = {
       pointA: point1,
       bodyB: body2,
       length: 30,
       stiffness: 0.004
   }
   this.body = Matter.Constraint.create(op);
   World.add(world,this.body)
   this.p = point1;
 }
display(){
  if(this.body.bodyB){
    var pos = this.body.bodyB.position;
    line(this.p.x,this.p.y,pos.x,pos.y)
  }
}
fly(){
  this.body.bodyB = null;
}
}