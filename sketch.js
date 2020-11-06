var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 30);
  fixedRect = createSprite(600, 200, 40, 80);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.velocityX = 2
  fixedRect.velocityX = -2
}

function draw() {
  background(0);  

  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y <=movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    movingRect.velocityX = -1 *(movingRect.velocityX)
    fixedRect.velocityX = -1 *(fixedRect.velocityX)
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}
