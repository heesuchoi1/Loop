function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

  var x;

  /*
  x = 1;
  ellipse(x * 150 , 100, 50, 50);

  x = 2;
  ellipse(x * 150, 100, 50, 50);

  x = 3;
  ellipse(x * 150, 100, 50, 50);
  */

  for (var x =1; X <=3; X++)
  {
    ellipse(x * 150, 100, 50, 50);
  }
}