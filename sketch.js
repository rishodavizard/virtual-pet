var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  dogImg=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  drawSprites();

  fill(255,255,255);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



