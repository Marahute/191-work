//Variables
    var rgb = {
      r: 155,
      g: 40,
      b: 220
    };
    var valX = 0;
    var valY = 0;
    var valX2 = 100;
    var valY2 = 100;
    var aba = 20;
    var echo = 30;
    var charlie = 15;
    var delta = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(150,70,200);
}

function draw() {
 blendMode(OVERLAY);
     noStroke();
     fill(rgb.r, rgb.g, rgb.b);
     arc(valX, valY, aba, echo, PI+TWO_PI, 0, OPEN);


     valX = noise(aba) * width;
     valY = random(0,height);
     aba = aba + 1;
     echo = abs(aba * 0.5);

     rgb.r = random (20, 150);
     rgb.g = random (100, 200);
     rgb.b = random (100,190);

     if (frameCount % 1000 === 0){aba = 60;}


     push();
     // blendMode(SCREEN);
     fill(rgb.r,rgb.g,rgb.b);
     noStroke();
     ellipse(delta, valY2, valX2, charlie);
     triangle(charlie,delta,valX2,valY2,echo,aba);
     scale(0.5, 1.3);
     triangle(charlie,delta,valX2,valY2,echo,aba);

     triangle(valX2,valY,echo,charlie,aba,valY2);


     valX2 = noise(charlie) * height;
     valY2 = random(0,width);
     charlie = charlie + 0.001;
     delta = delta - 0.001;

     pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}
