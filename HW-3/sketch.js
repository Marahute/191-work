function setup() {
    // NUMBER 1 thing to do
    createCanvas(500,500);
    background(135,206,250);

// Head
    push();
    fill(255);
    stroke(0);
    strokeWeight(13);
    ellipse(250,150,280,180);
    pop();

// Hat
push();
strokeWeight(9);
line(250,70,230,15);
line(230,15,270,35);
pop();
push();
strokeWeight(4);
fill(255,0,0);
ellipse(270,30,30,30);
pop();

// Mouth
push();
fill(0);
arc(250, 160, 80, 80, 0, PI, CHORD);
pop();

// Ear Left
push();
stroke(0);
strokeWeight(7);
arc(120, 110, 100, 100, 360, 300);
pop();

// Ear Right
push();
stroke(0);
strokeWeight(7);
arc(380, 110, 100, 100, 300, 1);
pop();

// Left Arm
push();
strokeWeight(12);
line(90,150,90,250);
line(90,250,160,260);
// Right Arm
line(400,150,360,250);
line(360,250,290,260);
pop();

// Left Eye
push();
fill(255,0,0);
ellipse(170, 120, 55, 55);
pop();

// Right Eye
push();
fill(255,0,0);
ellipse(330, 120, 55, 55);
pop();

//Body
push();
fill(0,0,255);
stroke(0);
strokeWeight(13);
quad(170, 220, 330, 220, 130, 420, 50, 420);
pop();
//Pants
push();
fill(255,0,0);
quad(110, 320, 250, 320, 130, 420, 50, 420);
pop();

//Suspenders Left
push();
strokeWeight(4);
stroke(255,75,220);
line(220, 220, 140, 320);
line(210, 220, 130, 320);
//Suspenders Right
line(300, 220, 200, 320);
line(290, 220, 190, 320);
pop();
//Suspender Button Left
push();
fill(100,255,79);
ellipse(182, 260, 15, 15);
//Suspender Right Button
ellipse(255, 260, 15, 15);
pop();

//lEFT Foot
push();
fill(102, 51, 0);
rect(10, 420, 75, 25, 20, 15, 5, 8);
//Right Foot
rect(80,420, 75, 25, 15, 20, 8, 5);
pop();
    /* Signature */
    text("REDDIT SNOO by Alex Schuler",250,490);


}
