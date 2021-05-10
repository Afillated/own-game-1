
var bullet
var gameState = 0
function preload()
{
	meteor1=loadImage("image/meteor.png")
	garbage=loadImage("image/garbage.png")
	spaceShipImg=loadImage("image/spaceship.png")
	
}

function setup() {
	createCanvas(800, 700);




	//Create the Bodies Here.
	Spaceship=createSprite(400,400,10,10)
	Spaceship.addImage(spaceShipImg)
	Spaceship.scale = 0.25;
	
	
	Spaceship.velocityY = 3;




  
}


function draw() {
 
  background(0);
  
  if(gameState === 0){
  	if(keyDown("W")){
		Spaceship.velocityY = -10;
	}
	if(keyDown("A")){
		Spaceship.velocityX = -5;
	}
	if(keyDown("D")){
		Spaceship.velocityX = 5;
	}
	Spaceship.velocityY = Spaceship.velocityY +1;


	if(keyDown("space")){
		bullet = createSprite(Spaceship.x,Spaceship.y,3,10)
		//bullet.addImage()
		bullet.velocityY = -8;
		}
	}
	console.log(Spaceship.y)
  spawnMeteors();
  drawSprites();
 
}


function spawnMeteors(){

	var framediv = Math.round(random(50,125))

	if(frameCount % framediv ===0){
		var obstacle = createSprite(200,0,10,10);
		obstacle.x = Math.round(random(50,775));
		obstacle.velocityY = 3;
		obstacle.scale = 0.25
		obstacle.lifetime = 500;
		var rand = Math.round(random(1,2))

		switch(rand){
			case 1 : obstacle.addImage(meteor1)
					break;
			case 2 : obstacle.addImage(garbage)
					break;
			default : break;		
		}
	}
}






