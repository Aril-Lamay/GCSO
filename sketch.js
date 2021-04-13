//declaring the variables
var car,wall;
var speed, weight;


function setup() {
  //creating the canvas
  createCanvas(1600,400);

  //assigning random speed and weight to the car
  speed = random(55,90);
  weight = random(400,1500);

  //creatingg the car and wall sprites
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

}

function draw() {
  //assigning color to the background
  background(0,0,0); 

  //execute the command if the car is not touching the wall
  if(isTouching(car,wall)!= true){
    //assign velocity to the car if space bar is pressed
    if(keyDown("space")){
      car.velocityX = speed;
    }
  }

  //execute the command if car is touching the wall
  if(isTouching(car,wall)){
    //set car velocity to 0
    car.velocityX = 0;
    //make the car visible
    car.x -=1;

    //declaring deformation for the car
    var deformation = 0.5 * weight * speed * speed / 22509;

    //assigning color to the car according to the deformation
    if (deformation >= 180){
      car.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if (deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }

  //display the sprites
  drawSprites();
}

//create a isTouching function
function isTouching(object1, object2) {
  if (object1.x - object2.x < object1.width / 2 + object2.width / 2
    && object2.x - object1.x < object1.width / 2 + object2.width / 2
    && object1.y - object2.y < object1.height / 2 + object2.height / 2
    && object2.y - object1.y < object1.height / 2 + object2.height / 2) {
      return true;
  }
  else {
    return false;
  }

}