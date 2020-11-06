class Mango{
    constructor(x,y,r){

        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }

    display(){

    var angle=this.body.angle;
    var pos=this.body.position;
    
    push()
    translate(pos.x,pos.y);
    rotate(angle);

    ellipse(0,0,this.width,this.height);

    pop()
        
    }
}