class Paper{
    constructor(x,y,radius)
    {
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);     
      
      World.add(world,this.body);
    }

    display()
    {
      var a = this.body.position;

      push()
      translate(a.x,a.y);
      ellipseMode(RADIUS);
      fill("orchid");
      strokeWeight(2);
      stroke("orchid");
      ellipse(0, 0, this.radius, this.radius);
      pop()
    }
}