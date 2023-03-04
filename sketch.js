
var box1;

function setup() {
  createCanvas(600, 400);
  box1=new Box ()
  box2 = new Box ()
}

function draw() {
  background(220);
  box1.show ()
  box1.move (2)
box2.show ()
box2.move (-2)


}

