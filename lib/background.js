const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");



const drawGame = () => {
  ctx.clearRect(0,0,700,301);
  drawBoard();
  drawCircles();
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
  ctx.moveTo(564,20);
  ctx.lineTo(564,300);
  ctx.strokeStyle = "gray";
  ctx.stroke();
  ctx.closePath();


};

let dx = 0.2;
let x = -35;
let circles = [
  -35,
  -70, -200,-400,-1000, -2000
];
let currentCrashIdx = undefined;

const drawCircles = () => {
  for(i = 0; i < circles.length; i++) {
    ctx.beginPath();
    ctx.arc(circles[i],37.5,14,0,Math.PI*2);
    // ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.closePath();
    circles[i] += dx;
    if(circles[i] > 0 && currentCrashIdx === undefined) {
      currentCrashIdx = i;
    }
  }
};

setInterval(drawGame, 0);



// ctx.beginPath();
// ctx.arc(547,37.5,14,0,Math.PI*2);
// ctx.stroke();
// ctx.closePath();
