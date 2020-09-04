class Paper{
    constructor(x,y,radius){
        var options={
            density:1.3,
            isStatic:false,
            restitution:0,
            friction:5.0
        }

        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        this.image=loadImage("paper.png");

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
       //ellipseMode(RADIUS);
        fill ("blue");
        //ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+5,this.radius,this.radius);
    
    }

    

}