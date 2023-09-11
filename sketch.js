let myAsciiArt;
let images = [];
let asciiPic;
let gfx;
let ascii_arr;

let poste;

let counter = 0;
let showAscii = false;

let years = [
  "1967",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000"
]

function preload() {
  images[0] = loadImage('img1.jpg');
  images[1] = loadImage('img2.webp');
  images[2] = loadImage('img3.jpg');
  images[3] = loadImage('img4.jpg');
  images[4] = loadImage('img5.jpg');
  images[5] = loadImage('img6.jpg');
}

function setup() {
  createCanvas(500, 500);
  gfx = createGraphics(120, 60);
  gfx.pixelDensity(1);

  myAsciiArt = new AsciiArt(this)

  textAlign(CENTER, CENTER); 
  textStyle(NORMAL);
  noStroke(); 
  fill(255);

  frameRate(30)

}

function draw() {
  if (showAscii) {
    background(0)
    textFont('monospace', 8); 

    gfx.image(images[counter], 0, 0, gfx.width, gfx.height);


    poste = map(mouseX, 0, 500, 2, 6);
    let posteVal = constrain(poste, 2, 6)
    console.log(posteVal)
    gfx.filter(POSTERIZE, posteVal);

    ascii_arr = myAsciiArt.convert(gfx);
    myAsciiArt.typeArray2d(ascii_arr, this);
    text(asciiPic, 0, 0)

  } else {
      image(images[counter], 0, 0, 500, 500)

  }
  fill(0)
  rect(10, 437, 82, 50)
  fill(255)
  textSize(32)
  textFont("monochrome")
  textAlign(CENTER, CENTER)
  text(years[counter], 50, 465)
}
function mouseReleased() {
    showAscii = !showAscii;
    if (!showAscii) {
      counter += 1;
      if (counter === images.length) {
        counter = 0;
    }
  }
}