var tom,tomImg1,tomImg2,tomImg3,tomImg4
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4
var bgimg
function preload() {
    bgimg=loadImage("images/garden.png")
    tomImg1=loadImage("images/cat1.png")
    tomImg2=loadImage("images/cat2.png")
    tomImg3=loadImage("images/cat3.png")
    tomImg4=loadImage("images/cat4.png")
    jerryImg1=loadImage("images/mouse1.png")
    jerryImg2=loadImage("images/mouse2.png")
    jerryImg3=loadImage("images/mouse3.png")
    jerryImg4=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(50,80)
    tom.addImage(tomImg1)
    tom.scale=0.1
    jerry=createSprite(150,160)
    jerry.addImage(jerryImg1)
    jerry.scale=0.1


}

function draw() {

    background("bgimg");
    bgimg=createSprite(1000,800)
    bgimg.addImage(bgimg)
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
