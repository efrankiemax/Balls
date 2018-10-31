var triske;
var daisy;
function preload() {
  triske = loadImage('triske.png');
  daisy = loadImage('flower.png');
//Above code preloads the triske and daisy images
}

function setup() {
  createCanvas(9000,9000);
  background(10,45,58);
}

function draw(){
//50 columns and 50 rows
  for (var row=0; row<=50; row++) {
    push();
  for (var col=0; col<=50; col++) {
    push();
    main();
    pop();
    translate(0,210);
  }
    pop();
    translate(310,0);
  }
  //each main drawing appears every 310 latterally and 210 longitudenally
}

function main() {
  fill(10, 45, 58);
  strokeWeight(1);
  stroke(255);
  //concentric circles at corners
    concentric(250, 150);
    concentric(250, 50);
    concentric(50, 150);
    concentric(50, 50);

//circles with thicker lines
//at row 1 column 2 and row 3 column 3
  strokeWeight(5);
    ellipse(100,50,100);
    ellipse(200,150,100);

//double circles at row 1 column 3
//and at row 3 column 2
  doubleCircle(100,150)
  doubleCircle(200,50)

  fill(10, 45, 58);
  strokeWeight(3);
  //row 2 circles(5 of them)
    ellipse(150,100,100);
  //ovals over circle in column 2.5
    oval(150,100);
    ellipse(50,100,100);
    ellipse(250,100,100);
    ellipse(100,100,100);
  //triske over cicle in column 2
    image(triske, 62, 56);
    ellipse(200,100,100);
  //daisy over cicle in column 3
    image(daisy, 150, 49);

}

function oval(x,y) {
  strokeWeight(1)
  //ovals that get smaller in length
    ellipse(x+39,y,10,52.578);
    ellipse(x+26,y,10,75.416);
    ellipse(x+13,y,10,86.56);
    ellipse(x,y,10,95);
    ellipse(x-13,y,10,86.56);
    ellipse(x-26,y,10,75.416);
    ellipse(x-39,y,10,52.578);
}

function concentric(x,y) {
//5 concentric circles that get smaller in radius by 20
  let concentricD = 100;
  for (i=0; i<=4; i++) {
    ellipse(x,y,concentricD);
    concentricD-=20;
  }
}

function doubleCircle(x,y) {
//circle with white circle inside that is smaller
  strokeWeight(1);
  stroke(255);
    ellipse(x,y,100);
  fill(255);
    ellipse(x,y,80);
}
