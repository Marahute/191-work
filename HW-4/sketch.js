//variables
var bk = 0;
var r = (108,19,43);
var fall1 = 0;
var fall2 = 0;
var fall3 = 0;
var fall4 = 0;
var fall5 = 0;
var br = (102,51,0);


function setup() {
  createCanvas(600,600);
}



function draw() {
  var currFrameRate;
  currFrameRate = frameRate();
  frameRate(60);

  //new background
  var bgRed, bgGreen, bgBlue;

  // Mapping mouseX to a usable range
  // bgVal = mouseX;
  // bgVal = mouseX * 0.425;
  bgRed = map(mouseX, 0, , 0, 50);
  bgGreen = map(mouseY, 0, 600, 0, 50);
  bgBlue = map(mouseX + mouseY, 0, 1200, 50, 0);


  background(bgRed, bgGreen, bgBlue);


/* old background
  var bgVal;

bgVal = map(mouseX, 0, 600, (240,248,255), (176,224,230));

  background(bgVal);
*/
//some identifier values
  stroke(0);
  strokeWeight(0);

//Tree log
pop();
push();
fill(102,51,0);
rect(200,0,150,520);
pop();
//tree branch
push();
var noiseScale=0.02;
for (var x=0; x < width; x++) {
    var noiseVal = noise((mouseX*noiseScale)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    fill(0,255,0);
    ellipse(0, 10, 600, 80);
        ellipse(mouseX+noiseVal*80-25, 10-10, 300, 80);
            ellipse(mouseX+noiseVal*80-50, 10+20, 300, 80);
                ellipse(mouseX+noiseVal*80-75, 10-10, 350, 80);
                    ellipse(mouseX+noiseVal*80-100, 10+20, 300, 80);
                        ellipse(mouseX+noiseVal*80-125, 10-40, 300, 80);
                            ellipse(mouseX+noiseVal*80-150, 10+20, 300, 80);
                                ellipse(mouseX+noiseVal*80-175, 10-40, 250, 80);
                                    ellipse(mouseX+noiseVal*80-200, 10+30, 250, 80);
                                        ellipse(mouseX+noiseVal*80-225, 10+20, 250, 80);
                                            ellipse(mouseX+noiseVal*80-250, 10-10, 250, 80);
                                                ellipse(mouseX+noiseVal*80-275, 10-20, 250, 80);
                                                    ellipse(mouseX+noiseVal*80-300, 10+10, 250, 80);
                                                        ellipse(mouseX+noiseVal*80+25, 10-20, 250, 80);
                                                            ellipse(mouseX+noiseVal*80+50, 10+30, 250, 80);
                                                                ellipse(mouseX+noiseVal*80+75, 10-30, 250, 80);
                                                                    ellipse(mouseX+noiseVal*80+100, 10-20, 250, 80);
                                                                        ellipse(mouseX+noiseVal*80+125, 10+10, 250, 80);
                                                                            ellipse(mouseX+noiseVal*80+150, 10-30, 250, 80);
                                                                                ellipse(mouseX+noiseVal*80+175, 10+20, 400, 80);
                                                                                    ellipse(mouseX+noiseVal*80+200, 10-10, 300, 80);
                                                                                        ellipse(mouseX+noiseVal*80+225, 10+40, 300, 80);
                                                                                            ellipse(mouseX+noiseVal*80+250, 10-20, 300, 80);
                                                                                                ellipse(mouseX+noiseVal*80+275, 10+10, 300, 80);
                                                                                                    ellipse(mouseX+noiseVal*80+300, 10-20, 600, 80);
  }



//cherries. code from dylan belcourt's snowflakes
push();
fill(153,0,0);
  ellipse(150,fall1,30,30);
  ellipse(560,fall1,50,50);
    fall1 = fall1 + 1.2;
  ellipse(250,fall2,50,50);
  ellipse(30,fall2,40,40);
    fall2 = fall2 + 1.9;
  ellipse(460,fall3,30,30);
    fall3 = fall3 + 1.9;
  ellipse(100,fall4,30,30);
    fall4 = fall4 + 2.2;
  ellipse(390,fall4,30,30);
    fall4 = fall4 + 2;
  ellipse(350,fall5,30,30);
    fall5 = fall5 + 1;
pop();

//basket
  push();
  fill(102,51,0);
  rect(mouseX,555,60,50);
  pop();
//basket top
  push();
  fill(255);
  rect(mouseX,550,60,3);
  rect(mouseX,545,60,3);
  pop();
  //basket lines
  push();
  fill(0);
  rect(mouseX,560,60,3);
  rect(mouseX,575,60,3);
  rect(mouseX,590,60,3);
  rect(mouseX,560,3,60);
  rect(mouseX+15,575-15,3,60);
  rect(mouseX+30, 590-30, 3, 60);
  rect(mouseX+45, 605-45,3,60);
  pop();



}
