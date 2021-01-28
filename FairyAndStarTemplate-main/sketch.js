var fairyImg,fairy;
var starnightImg,starnight;
var starImg,star;
var music;

function preload()
{
   fairyImg=loadImage(fairy2.png);
   starnightImg=loadImage(starnight.png);
   starImg=loadImage(star.png);
   music=loadSound(JoyMusic.mp3);
}

function setup() {
  createCanvas(800, 750);
// starnight=createSprite(300,300,800,750);
  //fairy=createSprite(20,20,12,32);
}


function draw() {
  background("black");
  drawSprites();
}
