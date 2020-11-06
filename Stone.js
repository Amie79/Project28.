class Stone {

    constructor(x,y,width,height){

 var options={isStatic:false,
              restitution:0,
              friction:1,
              density:1.2
          }
        this.image=loadImage("images/stone.png");

        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        fill(255);
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height);
        pop();
          
    }
}