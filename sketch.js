var fixedRect, movingRect;
var rect1, rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(700,300,80,90);
  rect2 = createSprite(400,600,20,50)
}

function draw() {
  background(0,0,0);  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
if (IsTouching(rect1,rect2)){
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";
}
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  drawSprites();
}















