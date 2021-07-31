var runner,runner_moving;
var path,pathImg;
function preload(){
  //pre-load images
  runner_moving =loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(120,300,);
  runner.addAnimation("moving",runner_moving);
  runner.scale=0.1;



}

function draw() {
  background(0);
  if(path.y >400){
    path.y =height/2;
  }
  runner.x = World.mouseX;
  edges= createEdgeSprites();
  runner.collide(edges);

 
  
drawSprites()
}

