const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");



const drawGame = () => {
  ctx.clearRect(0,0,700,301);
  drawBoard();
  drawCircles();
  requestAnimationFrame(drawGame);
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
  ctx.moveTo(570,20);
  ctx.lineTo(570,300);
  ctx.strokeStyle = "gray";
  ctx.stroke();
  ctx.closePath();
};

let dx = 1;
let x = -35;
let circles = [
  -35,
  -70, -200,-400,-1000, -2000
];

const drawCircles = () => {
  for(i = 0; i < circles.length; i++) {
    ctx.beginPath();
    ctx.arc(circles[i],35,7,0,Math.PI*2);
    ctx.stroke();
    ctx.closePath();
    circles[i] += dx;
  }
};

drawGame();
