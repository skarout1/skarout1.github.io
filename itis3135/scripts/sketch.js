function setup() {
    createCanvas(600, 600);
  }
  function draw() {
    background(135, 206, 235);
    fill("yellow");  
    stroke("orange");
    strokeWeight(20);
    circle(550, 50, 100);
    stroke(0);
    strokeWeight(0);
    fill("green");
    rect(0, 400, 600, 200);
    textSize(400);
    text("🥅", 75, 450);
    textSize(75);
    text("⚽", mouseX, mouseY);
    fill(0, 0, 0);
    textSize(25);
    text("Put the ball in the net!", 150, 50);
}