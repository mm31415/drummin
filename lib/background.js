const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");



const drawGame = () => {
  ctx.clearRect(0,0,700,301);
  drawBoard();
  drawCircles();
  drawText();

  // requestAnimationFrame(drawGame);
};

const drawBoard = () => {
  ctx.beginPath();
  ctx.moveTo(0,300);
  ctx.lineTo(700,300);
  ctx.moveTo(0,20);
  ctx.lineTo(700,20);

  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  let y = 35;
  ctx.beginPath();
  for(let i = 1; i < 8; i++) {
    ctx.moveTo(0,20+y*i);
    ctx.lineTo(700,20+y*i);
  }
  ctx.moveTo(530,20);
  ctx.lineTo(530,300);
  ctx.moveTo(560,20);
  ctx.lineTo(560,300);
  ctx.strokeStyle = "gray";
  ctx.stroke();
  ctx.closePath();

};

let dx = 2.5;
let circles = [
  -55,
  // -112.5,
  // -125,
  -105,
];
let currentCrashIdx = undefined;

const drawCircles = () => {
  for(let i = 0; i < circles.length; i++) {
    if(currentCrashIdx === undefined) {
      currentCrashIdx = i;
    }
    ctx.beginPath();
    ctx.arc(circles[i],37.5,14,0,Math.PI*2);
    if(i % 2 === 0) {
      ctx.strokeStyle = "green";
    } else {
      ctx.strokeStyle = "blue";
    }
    ctx.stroke();
    ctx.closePath();
    // console.log(circles[i]);
    circles[i] += dx;
    if (circles[i] > 545) {
      circles.shift();
    }
    // if(circles[currentCrashIdx] < 0) {
    //   i = circles.length;
    // }
  }
};

const drawText = () => {
  if(circles[currentCrashIdx] > 547 - 3 && circles[currentCrashIdx] < 547 + 3) {
    ctx.font="20px Georgia";
    ctx.fillText("Hello World!",10,50);
  }
};

track = document.getElementById("track");
track.addEventListener("play", (e) => {
  setInterval(drawGame, 25);
  // drawGame();
});

// setInterval(drawGame, 0);



// ctx.beginPath();
// ctx.arc(547,37.5,14,0,Math.PI*2);
// ctx.stroke();
// ctx.closePath();
