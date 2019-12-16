console.log("p5 is working");

let myCanvas;

let synth;
let melody;
let loop;

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.style("z-index", "-10");
  melody = new Tone.MembraneSynth().toMaster();
  synth = new Tone.Synth().toMaster();
  loop = new Tone.Loop(playSound, "4n");
  loop.start();
  Tone.Transport.start();
}

function playSound() {
  if (mouseX > 100 || mouseY > 100) {
    synth.triggerAttackRelease("C5", "32n");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  let radius = width * 1.5;

  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, -600);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        cone(30, 30);
      } else {
        box(30, 30, 30);
      }
      pop();
    }
  }
}
