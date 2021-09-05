var path,path_png;
var runner,runner_pngs;
var leftboundary, rightboundary

function preload()
{
  //pre-load images
  path_png = loadImage("path.png");
  runner_pngs = loadAnimation("runner-1.png","runner-2.png")
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,400,400);
  path.addImage("background.path",path_png);
   path.velocityY=5;
   path.scale=0.9;
  



  runner = createSprite(200,300,20,30);
  runner.addAnimation("running",runner_pngs);
  runner.scale=0.1

  leftboundary=createSprite(0,0,100,800)
leftboundary.visible = false

  rightboundary=createSprite(410,0,100,800)
 rightboundary.visible = false
 
}

function draw()
{
  background(0);

  if (path.y>400)
  {

  path.y = 200

  }

  runner.x = mouseX;

     runner.collide(rightboundary)
     runner.collide(leftboundary)

  drawSprites();
}
