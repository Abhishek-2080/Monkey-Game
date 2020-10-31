
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, bananaGroup;
var FoodGroup, obstacleGroup
var ground;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
 createCanvas(400,400);
  monkey = createSprite(40,340);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1

  ground = createSprite(200,380,400,10);
  ground.velocityX=-3;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {

   background("white");
  
  if(ground.x < 200){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
     monkey.velocityY=-12;
     }
  
  monkey.velocityY = monkey.velocityY+0.8;
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score = score+5;
  }
  
  
  
  stroke("black");
  textSize(20);
  fill("blue")
  text("Score : "+score,10,60);
  
  stroke("black");
  textSize(20);
  fill("red");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time : " +survivalTime,10,30);
  console.log(frameCount/frameRate());
  
  spawnBanana();
  spawnObstacles();
  
  monkey.collide(ground);
  
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
   var banana = createSprite(200,Math.round(random(120,200)),10,10);
    banana.addImage("banana",bananaImage)
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=-1;
    bananaGroup.add(banana);
    bananaGroup.setLifetimeEach(-1);
    
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
    var obstacle = createSprite(370,350,10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX=-5;
    obstacle.lifetime=-1;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(-1);
  }
}


