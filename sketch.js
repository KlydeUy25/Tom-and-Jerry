var canvas,bg,tomImage,tom,jerry,jerryImage

function preload() {
    //load the images here
    bg = loadImage("images/garden.png"); 
    tomImg1= loadAnimation("images/cat1.png"); 
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
     tomImg3= loadAnimation("images/cat4.png"); 
     jerryImg1=loadAnimation("images/mouse1.png"); 
     jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png"); 
     jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite
    tom=createSprite(870,600)
    tom.addAnimation("tom sleeping",tomImg1)
    tom.scale=0.25
    jerry=createSprite(200,600)
    jerry.addAnimation("jerrystanding",jerryImg1)
    jerry.scale=.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - MouseEvent.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX=0
        tom.addAnimation("tomLastImage",catImg3)
        tom.scale=0.2;
         tom.changeAnimation("tomLastImage"); 
         jerry.addAnimation("jerryLastImage", jerryImg3); 
         jerry.scale=0.15; 
        jerry.changeAnimation("jerryLastImage");
        tom.x=300
        

    }
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",catImg);
        tom.changeAnimation("tomRunning")
        jerry.addAnimation("jerryteasing",jerryImg2)
        jerry.frameDelay=25
        jerry.changeAnimation("jerryteasing");
    
    }


  //For moving and changing animation write code here


}
