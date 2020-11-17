class Body extends BaseClass {
    constructor(x,y){
      super(x,y,25,25);
      this.image = loadImage("sprites/wood2.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }


  function mouseDragged(){
    Matter.Body.setPosition(shoot.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}