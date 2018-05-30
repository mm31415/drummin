const DrumKit = require("./drumset.js");

// const canvas = document.getElementById("my-canvas");
// const ctx = canvas.getContext("2d");

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");



const drawGameBoard = () => {
  ctx.clearRect(0,0,700,542);
  DrumKit.drawDrumset();

  ctx.beginPath();
  ctx.moveTo(0,300);
  ctx.lineTo(700,300);
  ctx.moveTo(0,30);
  ctx.lineTo(700,30);
  
  ctx.stroke();
};

setInterval(() => drawGameBoard(), 400);

// module.exports = {
//   drawGameBoard: drawGameBoard
// };
