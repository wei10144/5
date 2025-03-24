let button1, button2;
let sprite1Images = [];
let sprite2Images = [];
let currentFrame1 = 0;
let currentFrame2 = 0;
let frameRate = 10; // 動畫速度慢一點
let sprite1 = false;
let sprite2 = false;
let iframe;

function preload() {
  for (let i = 1; i <= 5; i++) {
    sprite1Images.push(loadImage(sprite01_.png));
  }
  for (let i = 1; i <= 7; i++) {
    sprite2Images.push(loadImage(sprite01_2_.png));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(showSprite1);
  button1.mouseOut(hideSprites);

  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(showSprite2);
  button2.mouseOut(hideSprites);
}

function draw() {
  background(220);
  if (sprite1) {
    image(sprite1Images[currentFrame1], 50, 50, 42, 41);
    if (frameCount % frameRate === 0) {
      currentFrame1 = (currentFrame1 + 1) % sprite1Images.length;
    }
  }
  if (sprite2) {
    image(sprite2Images[currentFrame2], 50, 100, 42, 41);
    if (frameCount % frameRate === 0) {
      currentFrame2 = (currentFrame2 + 1) % sprite2Images.length;
    }
  }
}

function showSprite1() {
  sprite1 = true;
  sprite2 = false;
  if (!iframe) {
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://www.et.tku.edu.tw/');
    iframe.position(50, 150);
    iframe.size(1000, 800);
  }
}

function showSprite2() {
  sprite1 = false;
  sprite2 = true;
  if (!iframe) {
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://wei10144.github.io/0310/');
    iframe.position(50, 150);
    iframe.size(1000, 800);
  }
}

function hideSprites() {
  sprite1 = false;
  sprite2 = false;
  if (iframe) {
    iframe.remove();
    iframe = null;
  }
}
