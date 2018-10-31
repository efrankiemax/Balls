function setup() {
  createCanvas(5000,5000);
  background(10,45,58);
}

function draw(){
  for (var row=0; row<=50; row++) {
    push();
  for (var col=0; col<=50; col++) {
    push();
      main();

    pop();
    translate(0,210);
    if(row%2==0){
      translate(160,0)
      print("I did it")
    }
    else {
      print("hi")
    }
  }

      pop();
        translate(310,0);
  }
}

function main() {
  fill(10, 45, 58);
  strokeWeight(1);
  stroke(255);
    concentric(250, 150);
    concentric(250, 50);
    concentric(50, 150);
    concentric(50, 50);

  strokeWeight(5);
    ellipse(100,50,100);
    ellipse(200,150,100);

  strokeWeight(1);
    ellipse(100,150,100);
    ellipse(200,50,100);

  fill(255);
    ellipse(200,50,80);
    ellipse(100,150,80);

  fill(10, 45, 58);
  strokeWeight(3);
    ellipse(150,100,100);
    //oval(150,100);
    ellipse(50,100,100);
    ellipse(250,100,100);
    ellipse(100,100,100);
    oval(100,100);
    ellipse(200,100,100);
    oval(200,100);
}

function oval(x,y) {
  strokeWeight(1)
    ellipse(x,y,10,95);
    ellipse(x+13,y,10,86.56);
    ellipse(x+26,y,10,75.416);
    ellipse(x+39,y,10,52.578);
    ellipse(x-13,y,10,86.56);
    ellipse(x-26,y,10,75.416);
    ellipse(x-39,y,10,52.578);
}

function concentric(x,y) {
  let concentricD = 100;
  for (i=0; i<=4; i++) {
    ellipse(x,y,concentricD);
    concentricD-=20;
  }
}
