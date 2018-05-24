var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

const drawBassDrum = () => {
  const coords = [
    [350,350], [390,370], [380,355], [390,400],
    [390,380], [380,430], [390,420], [350,440],
    [365,440], [320,430], [330,440], [310,390],
    [310,410], [310,410], [320,360], [310,380]
  ];

  ctx.beginPath();
  ctx.moveTo(...randomize(350,350));
  for(let i = 0; i < coords.length; i++) {
    ctx.lineTo(...randomize(...coords[i]));
  }
  ctx.closePath();

  //
  ctx.moveTo(385,400);
  ctx.lineTo(400,438);

  ctx.moveTo(314,403);
  ctx.lineTo(299,438);

  ctx.strokeStyle = "blue";
  ctx.stroke();

};

const drawTom3 = () => {
  const rightSide = [
    [495,340], [505,345], [495,350], [505,355], [495,360],
    [505,365], [495,370], [505,375], [495,380],
    [505,385], [495,390], [505,395], [495,400]
  ];

  const leftSide = [
    [405,400], [395,395], [405,390], [395,385], [405,380],
    [395,375], [405,370], [395,365], [405,360],
    [395,355], [405,350], [395,345], [405,340]
  ];

  ctx.beginPath();
  ctx.moveTo(400,335);
  ctx.lineTo(500,335);
  for(let i = 0; i < rightSide.length; i++) {
    ctx.lineTo(...randomize(...rightSide[i]));
  }
  ctx.lineTo(505,405);
  ctx.lineTo(395,405);
  for(let i = 0; i < leftSide.length; i++) {
    ctx.lineTo(...randomize(...leftSide[i]));
  }
  ctx.lineTo(400,335);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};


const createCoords = (x,y) => {

};

const randomize = (x, y) => {
  return [
    Math.random() * (x - (x - 2)) + (x - 2),
    Math.random() * (y - (y - 2)) + (y - 2)
  ];
};

const drawHitBassDrum = () => {
  ctx.clearRect(0,0,700,500);
  ctx.beginPath();
  ctx.arc(350,400,(Math.random() * (50 - 20) + 20),0,2*Math.PI);
  ctx.stroke();
};
//
// drawBassDrum();
// drawTom3();
setInterval(
  () => {
    ctx.clearRect(0,0,700,500);
    drawBassDrum();
    drawTom3();
  },400
);

module.exports = {
  drawHitBassDrum: drawHitBassDrum
};
