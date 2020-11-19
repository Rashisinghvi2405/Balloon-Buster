  var balloon, balloon_image,       red_balloon,green_balloon,green_balloonimg,
      bow,bow_image
  var background1, background1_image
var blue_balloon,blue_balloonimg,pink_balloon,
    pink_balloonimg
  var red1,redImage
  var pink1,pinkImage
  var blue1,blueImage
  var green1,greenImage
  
  var score = 0
  var redGroup, blueGroup, pinkGroup, greenGroup
  var arrowGroup
  
function preload(){

    balloon_image = loadImage("red_balloon0.png");
    background1_image = loadImage("background0.png");
    bow_image =   loadImage("bow0.png");
    green_balloonimg = loadImage("green_balloon0.png");
    balloon_image = loadImage("red_balloon0.png");
    blue_balloonimg = loadImage("blue_balloon0.png");
    pink_balloonimg = loadImage("pink_balloon0.png");
    arrowImage = loadImage("arrow0.png");
}


function setup() {
  createCanvas(500, 500);

    
     background1 = createSprite(50,70,500,500);
     background1.addImage("background",            background1_image);
     background1.x = background1.width /2;
    background1.velocityX = -4;
    background1.scale = 2.5;
  
    bow = createSprite(480,170,10,10);
    bow.addImage("bow",bow_image);
 
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  redGroup = new Group();
   arrowGroup = new Group();
}

function draw() {
 
  background("black");
  if(background1.x < 0) {
     background1.x = background1.width /2;
  }
   if(keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage("arrow",arrowImage);
    temp_arrow.y = bow.y;
  }
  
  bow.y = mouseY;
  
   spawnBalloons();
  
  if(arrowGroup.isTouching(redGroup)) {
    arrowGroup.destroyEach();
    redGroup.destroyEach();
    score = score +1;
  }
  
  if(arrowGroup.isTouching(blueGroup)) {
    arrowGroup.destroyEach();
    blueGroup.destroyEach();
    score = score + 2;
  }
  
  if(arrowGroup.isTouching(greenGroup)) {
    arrowGroup.destroyEach();
    greenGroup.destroyEach();
    score = score + 3;
  }
  
  if(arrowGroup.isTouching(pinkGroup)) {
    arrowGroup.destroyEach();
    pinkGroup.destroyEach();
    score = score + 4;
  }
 drawSprites();
 text("Score: "+ score, 270,30);
  
}
  function createArrow() {
  
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -6;
  //arrow.addImage("arrow",arrowImage);
  arrow.scale = 0.3;
    arrow.lifetime = 100;
    arrowGroup.add(arrow);
    return arrow;
  } 

function redBalloon() {
  var red = createSprite(0,Math.round(100,370),10,10);
  red.addImage("red",balloon_image);
  red.velocityX = 3;
  red.lifetime = 150;
    red.scale = 0.1;
  redGroup.add(red);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage("green",green_balloonimg);
  green.velocityX = 3;
  green.lifetime = 150;
    green.scale = 0.1;
  greenGroup.add(green);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage("blue",blue_balloonimg);
  blue.velocityX = 3;
  blue.lifetime = 150;
    blue.scale = 0.1;
  blueGroup.add(blue);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage("pink",pink_balloonimg);
  pink.velocityX = 3;
  pink.lifetime = 150;
    pink.scale = 1.3;
  pinkGroup.add(pink);
}
 function spawnBalloons(){
   
   
var select_balloon = Math.round(random(1,4));
  
  if(World.frameCount % 80 ===0){
    if(select_balloon ===1){
      redBalloon();
    }
    else if(select_balloon ===2){
      greenBalloon();
  }
     else if(select_balloon ===3){
      blueBalloon();
  }
     else {
      pinkBalloon();
  }
    }
  

 }     