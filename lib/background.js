const DrumKit = require("./drumset.js");

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");



const drawGame = () => {
  ctx.clearRect(0,0,700,542);
  DrumKit.drawDrumset();
  drawBoard();

};

const drawBoard = () => {
  ctx.beginPath();
  ctx.moveTo(0,300);
  ctx.lineTo(700,300);
  ctx.moveTo(0,20);
  ctx.lineTo(700,20);

  ctx.strokeStyle = "black";
  ctx.stroke();

  let y = 35;
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
};

setInterval(() => drawGame(), 400);
