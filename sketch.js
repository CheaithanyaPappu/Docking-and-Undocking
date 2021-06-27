var issing, spacebging, space1, space2, space3, space4
var iss, spacecraft
var hasDocked = false;


function preload() {
  issing = loadImage("Images/iss.png");
  spacebging = loadImage("Images/spacebg.jpg");
  space1 = loadImage("Images/spacecraft1.png");
  space2 = loadImage("Images/spacecraft2.png");
  space3 = loadImage("Images/spacecraft3.png");
  space4 = loadImage("Images/spacecraft4.png");


}


function setup() {
  createCanvas(displayWidth - 20, displayHeight - 120);

  spacecraft = createSprite(290, 500);
  spacecraft.addImage(space1);
  spacecraft.scale = 0.15;

  iss = createSprite(300, 300);
  iss.addImage(issing);


}

function draw() {
  background(spacebging);

  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(1, -1);


    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2;
    }

    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(space3);
      spacecraft.x = spacecraft.x - 1;
    }

    if (keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(space2);
      spacecraft.x = spacecraft.x + 1;
    }
    if (keyDown("DOWN_ARROW")) {
      spacecraft.addImage(space1);

    }
    if (spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss. x - 10)) {
      hasDocked = true;
      textSize(25);
      fill("white");
      text("Docking Successfull!", 200, 500);


    }









  }
  drawSprites();
}



