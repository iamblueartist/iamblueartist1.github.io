let xPosition = 300;
let xChange = 1;

function setup(){
let myCanvas = createCanvas(400, 600)
myCanvas.parent('myContainer');
}

// function draw(){
//     background(55);
// noStroke();
// fill(255,0, 0);
// ellipse(xPosition, 200, 50);

// xPosition = xPosition + xChange;


// if(xPosition > width || xPosition < 0) {
//     xChange = xChange * -1;
// }

// console.log(xPosition);
// }


function draw() {
    let c = map(mouseY, 0, height, 255, 0)
    // console.log(c);

    background(40, 10, c);
  
    let noiseLevel = 300;
    let noiseScale = 0.002;
    for (let x = 0.5; x < width; x += 1) {
      // Scale input coordinates.
      let nx = noiseScale * x;
      let nt = noiseScale * frameCount;
      // Compute noise value.
      let y = noiseLevel * noise(nx, nt);
      // Render.
      line(x, 0, x, y);

      beginShape();
      vertex(30, 20);
      bezierVertex(80, 0, 80, 75, 30, 75);
      bezierVertex(50, 80, 60, 25, 30, 20);
      endShape();


    }
    


    
      
    }
 
    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(4);
    // bezier(250, 250, 0, 100, 100, 0, 100, 0, 0, 0, 100, 0);


