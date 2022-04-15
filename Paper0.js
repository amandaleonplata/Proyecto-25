class Paper{
    constructor(x,y){
    var options={
    isStatic:true,
    restitution:0.3,
    friction:0,
    density:1.2			
    }
    this.body = Bodies.rectangle(x, y,50,50, options);
    this.image = loadImage("paper.png");
    
 
    }
display()
{
    var angle = this.body.angle;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    if(keyWentUp("LEFT_ARROW")){       
        this.velocityY=2;
     this.body.position.y = 600;
    Matter.Body.setStatic(starBody,false); 
	}
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,100,100);
    pop();

	
}
      }
        


