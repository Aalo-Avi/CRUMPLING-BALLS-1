class Dustbin{
    constructor(x,y,width,height)
    {
     var options={
        isStatic : true
     }
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body)
    }

    display()
    {
        var p = this.body.position;
        push()
        translate(p.x,p.y);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(2);
        stroke("yellow");
        rect(0, 0, this.width, this.height);
        pop() 
    }
}