


var fr = 120;

var x = 100;

var f = false;





function setup() {



  createCanvas(windowWidth, windowHeight);
  background(0);


}

function draw() {
  //Placeholder. How to make swatches combine once they touch, not before????
  strokeWeight(100);

  blendMode(DIFFERENCE);


  if (f) {

    push();

      frameRate (fr);
      //Series of circles expanding into each other
      push();
      fill (19, 175, 200);
      ellipse (width*0.75, height*0.75, x*4, x*4);
      pop();
      push();
      fill (60,60,60);
      ellipse (width*0.25, height*0.25, x*2, x*2);
      pop();
      push();
      fill (200, 175, 19);
      ellipse (width/2, height/2, x, x);
      pop();
      push();
      fill (120,120,120);
      ellipse (width/0.25, height/0.25, x/2, x/2);
      pop();
      push();
      fill(150, 75, 255);
      ellipse (width/2, height/2, x/4, x/4);
      pop();
      push();
      fill (240,9,20);
      ellipse (width*0.25, height*0.25, x/8, x/8);
      pop();
      push();
      fill (255, 0, 0);
      ellipse (width*0.75, height*0.75, x/16, x/16);
      pop();

    pop();
    x++;
  } else {

    background(0, 0, 0);
  }


  // fill (200, 100, 75);
  // ellipse (windowWidth*0.75, windowHeight*0.75, x/2, x/2);

}
//Sketch animated on mousepress. Didn't know we were making a PHYSICAL button. Oops.
function mousePressed() {
  if (dist(mouseX, mouseY, windowWidth, windowHeight) < 0); {
    f = !f;
  }

}
