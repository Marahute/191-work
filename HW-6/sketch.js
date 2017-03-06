


var fr = 120;

var x = 100;

var h = height;
var w = width;

var f = false;





function setup() {





  createCanvas(windowWidth, windowHeight);
  background(0);


}

function draw() {

 if (f) {

   frameRate (fr);


  fill (19, 175, 200);
  ellipse (width*0.75, height*0.75, x*4, x*4);
  fill (60,60,60);
  ellipse (width*0.25, height*0.25, x*2, x*2);
  fill (200, 175, 19);
  ellipse (width/2, height/2, x, x);
  fill (120,120,120);
  ellipse (width/0.25, height/0.25, x/2, x/2);
  fill(150, 75, 255);
  ellipse (width/2, height/2, x/4, x/4);
  fill (240,240,240);
  ellipse (width*0.25, height*0.25, x/8, x/8);
  fill (255, 255, 255);
  ellipse (width*0.75, height*0.75, x/16, x/16);
  x++;
  } else {




    background(0, 0, 0);
      }


      fill (200, 100, 75);
      ellipse (windowWidth*0.75, windowHeight*0.75, x/2, x/2);

    }

    function mousePressed() {
      if (dist(mouseX, mouseY, windowWidth, windowHeight) < 0); {
        f = !f;
    }





}
