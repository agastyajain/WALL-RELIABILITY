var wall;
var bullet;
var thickness;





function setup() {
  createCanvas(1250, 550);
  thickness = Math.round(random(40,80));
  bullet = createSprite(80, 275, 100, 40);
  wall = createSprite(1150, 275, thickness, 275);
  speed = Math.round(random(10,90));
  weight =Math.round(random(200,500));




}

function draw() {
  background(255, 255, 255);

  if (keyDown("space")) {
    bullet.velocityX = speed;
  }
textSize(20);
fill("yellow");
stroke("red");
text("Width of the Wall:" + thickness,50,50);
text("Speed of the Bullet:" + speed,300,50);
text("Weight of the Wall:" + weight,600,50);


  if (isTouching(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)


    if (damage > 10) {
      wall.shapeColor = "red";
      textSize(40);
      fill("red");
      stroke("yellow");
      text("It is a weak wall!!", 200, 200);
    }
    if (damage < 10) {
      wall.shapeColor = "green";
      textSize(40);
      fill("green");
      stroke("yellow");
      text("It is a safe wall!!", 200, 200);
    }

  }


  drawSprites();

}

function isTouching(object1, object2) {
  if (
    (object1.x - object2.x < object1.width / 2 + object2.width / 2) &&
    (object2.x - object1.x < object1.width / 2 + object2.width / 2) &&
    (object1.y - object2.y < object1.height / 2 + object2.height / 2) &&
    (object2.y - object1.y < object1.height / 2 + object2.height / 2)
  ) {
    return true;
  }
  else {
    return false;

  }
}






