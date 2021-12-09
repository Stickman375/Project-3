var bg,waitimg,play,about,home,restartimg,playerimg,treeImg,playerLeft,axeImg
var gameState="wait"
var logo
var wood,tree,axe


//load images here
function preload(){
waitimg=loadImage("bga.png")
playimg=loadImage("barrenland.jpg")
aboutimg=loadImage("bga.jpg")
aboutpopimg=loadImage("popupzombie.png")
endbg=loadImage("zombiewin.gif")
restartimg=loadImage("restart.png")
playerimg=loadAnimation("R1.png","R2.png","R3.png","R4.png","R5.png","R6.png","R7.png")
playerLeft=loadAnimation("R1left.png","R2left.png","R3left.png","R4left.png","R5left.png","R6left.png","R7left.png")
treeImg=loadImage("tree1.gif");
axeSwing=loadImage("axe.gif");


//zombie1img=loadImage("zombie.png")

}

function setup(){
    createCanvas(displayWidth,displayHeight)
    
wood=0

tree=createSprite(1000,200,70,200)
tree.addImage(treeImg);
tree.scale=1;
tree.visible=false;

////axe.position(tree.x-100,tree.y); 
//axe.addImage(axeSwing);

logo=createImg("logo.png")
logo.position(windowWidth/2-250,0)
logo.size(500,500)


play=createImg("play.png")
play.position(50,20)
play.size(100,100)

about=createImg("about2.png")
about.position(50,120)
about.size(100,100)


home=createImg("back.png")
home.position(50,windowHeight-100)
home.size(100,100)
home.hide()

popup1=createSprite(windowWidth/2,windowHeight/2)
popup1.addImage(aboutpopimg)
popup1.visible=false
popup1.scale=1.5


zombie1=createSprite(windowWidth/2,windowHeight/2)
zombie1.addAnimation("walk",playerimg)
zombie1.addAnimation("left",playerLeft)
zombie1.scale=2.5
zombie1.visible=false



}



function draw(){

    if (gameState==="wait"){
    background(waitimg)
   // zombie1.visible=false
   popup1.visible=false
   zombie1.visible=false
logo.visible=true

}

if(play.mousePressed(()=>{
gameState="play"
//zombie1.visible=true
home.show()


}))


if(home.mousePressed(()=>{
    gameState="wait"
    }))

if(about.mousePressed(()=>{
    gameState="about"
    //popup1.visible=true

    }))

if(gameState==="play"){
    zombie1.velocityX=0
background(playimg)
//image(playimg,0,0,4*windowWidth,2*windowHeight)
logo.hide()
popup1.visible=false
zombie1.visible=true




}

//camera.x=zombie1.x;
//camera.y=zombie1.y





//camera.position.x=zombie1.position.x



if(keyDown("DOWN_ARROW")){
    zombie1.y +=5
   
  }if(keyDown("UP_ARROW")){
    zombie1.y -=5
   
  }if(keyDown("LEFT_ARROW")){
    zombie1.x -=5
    zombie1.changeAnimation("left",playerLeft);
    
  }if(keyDown("RIGHT_ARROW")){
    zombie1.x +=5
    zombie1.changeAnimation("walk",playerimg);
    
  }

if(gameState==="about"){
   // background(aboutimg)}

   popup1.visible=true
   logo.hide()


   
    }

    if(keyWentDown("space")&&zombie1.isTouching(tree)){
        wood=wood+1;
    }

    drawSprites()
    

    if(gameState==="play"){
        textSize(50);
    fill("black");
    text("Wood:"+wood,700,200)
    tree.visible=true;
    }
}



