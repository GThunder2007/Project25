class Paper{
    constructor(x,y) {
     var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.3,
       density:1.2
   }
 
     
     this.body = Bodies.circle(x,y,30, options);
     this.radius = 30;
     this.image = loadImage("sprites/paper.png");
     World.add(ourworld,this.body)
    }
 
    
    display(){
 
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     rotate(angle);
     translate(pos.x,pos.y)
     fill("magenta")
     imageMode(RADIUS);
     image(this.image,0,0,this.radius,this.radius);
     pop();
 }
 
 
 
 
 
 
 
 
 }