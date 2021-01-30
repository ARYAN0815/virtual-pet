//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dog

function preload()
{
 dogIMG = loadImage("images/dogImg.png");
  dog1IMG = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);

  dog=createSprite(250,250,30,30)
  dog.addImage(dogIMG)
  dog.scale=0.2
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {
  background("green")  
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dog1IMG)

}
drawSprites();
fill("white")
text("food:"+foodS,170,200)
}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
if(x<=0){
  x=0
}
else{
x=x-1
}
database.ref('/').update({
Food:x
})
}



