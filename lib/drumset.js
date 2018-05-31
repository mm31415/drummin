
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const drawBassDrum = () => {
  const coords = [
    [350,450], [390,470], [380,455], [390,500],
    [390,480], [380,530], [390,520], [350,540],
    [365,540], [320,530], [330,540], [310,490],
    [310,510], [310,510], [320,460], [310,480]
  ];

  ctx.beginPath();
  ctx.moveTo(...randomize(350,450));
  for(let i = 0; i < coords.length; i++) {
    ctx.lineTo(...randomize(...coords[i]));
  }
  ctx.closePath();

  ctx.moveTo(385,500);
  ctx.lineTo(400,538);

  ctx.moveTo(314,503);
  ctx.lineTo(299,538);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawTom1 = () => {
  ctx.beginPath();
  ctx.arc(300,390,28,0,Math.PI*2);
  ctx.closePath();

  ctx.moveTo(330,464);
  ctx.lineTo(330,430);
  ctx.lineTo(315,415);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawTom2 = () => {
  ctx.beginPath();
  ctx.arc(400,390,35,0,Math.PI*2);
  ctx.closePath();

  ctx.moveTo(360,455);
  ctx.lineTo(360,430);
  ctx.lineTo(375,415);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawTom3 = () => {
  const rightSide = [
    [495,440], [505,445], [495,450], [505,455], [495,460],
    [505,465], [495,470], [505,475], [495,480],
    [505,485], [495,490], [505,495], [495,500]
  ];

  const leftSide = [
    [405,500], [395,495], [405,490], [395,485], [405,480],
    [395,475], [405,470], [395,465], [405,460],
    [395,455], [405,450], [395,445], [405,440]
  ];

  ctx.beginPath();
  ctx.moveTo(400,435);
  ctx.lineTo(500,435);
  for(let i = 0; i < rightSide.length; i++) {
    ctx.lineTo(...randomize(...rightSide[i]));
  }
  ctx.lineTo(505,505);
  ctx.lineTo(395,505);
  for(let i = 0; i < leftSide.length; i++) {
    ctx.lineTo(...randomize(...leftSide[i]));
  }
  ctx.lineTo(400,435);
  ctx.closePath();

  ctx.moveTo(410, 505);
  ctx.lineTo(410, 538);

  ctx.moveTo(490, 505);
  ctx.lineTo(490, 538);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawSnare = () => {
  const rightSide = [
    [295,440], [305,445], [295,450], [305,455],
    [295,460], [305,465], [295,470], [305,475]
  ];

  const leftSide = [
    [195,475], [205,470], [195,465], [205,460],
    [195,455], [205,450], [195,445], [205,440]
  ];

  ctx.beginPath();
  ctx.moveTo(200,435);
  ctx.lineTo(300,435);
  for(let i = 0; i < rightSide.length; i++) {
    ctx.lineTo(...randomize(...rightSide[i]));
  }
  ctx.lineTo(305,475);
  ctx.lineTo(195,475);
  for(let i = 0; i < leftSide.length; i++) {
    ctx.lineTo(...randomize(...leftSide[i]));
  }
  ctx.lineTo(200,435);
  ctx.closePath();

  ctx.moveTo(250,475);
  ctx.lineTo(250,520);
  ctx.lineTo(220,538);
  ctx.moveTo(250,520);
  ctx.lineTo(280,538);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawRide = () => {
  const coords = [
    [410,320],[417,320],[417,340],[424,340],[424,325],[431,325],[431,345],
    [438,345],[438,330],[445,330],[445,350],[452,350],[452,335],[459,335],
    [459,355],[466,355],[466,340],[473,340],[473,360],[480,360],[480,345],
    [487,345],[487,365],[494,365],[494,350],[501,350],[501,370],[508,370],
    [508,355],[515,355],[515,375],[523,375],[523,365]
  ];

  ctx.beginPath();
  ctx.moveTo(410,330);
  for(let i = 0; i < coords.length; i++) {
    ctx.lineTo(...randomize(...coords[i]));
  }

  ctx.moveTo(469,345);
  ctx.lineTo(469,520);
  ctx.lineTo(429,538);
  ctx.moveTo(469,520);
  ctx.lineTo(509,538);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawCrash = () => {
  const coords = [
    [210,320],[217,320],[217,340],[224,340],[224,325],[231,325],[231,345],
    [238,345],[238,330],[245,330],[245,350],[252,350],[252,335],[259,335],
    [259,355],[266,355],[266,340],[273,340],[273,360],[280,360],[280,345],
    [287,345],[287,365],[294,365],[294,350],[301,350],[301,370],[308,370],
    [308,355],[315,355],[315,375],[323,375]
  ];

  ctx.beginPath();
  ctx.moveTo(210,365);
  let j = coords.length - 1;
  for(let i = 0; i < coords.length; i++) {
    ctx.lineTo(...randomize(coords[i][0],coords[j][1]));
    j--;
  }
  ctx.lineTo(...randomize(323,330));

  ctx.moveTo(267,353);
  ctx.lineTo(267,510);
  ctx.lineTo(237,538);
  ctx.moveTo(267,510);
  ctx.lineTo(297,538);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};

const drawHiHat = () => {
  ctx.beginPath();
  ctx.rect(...randomize(155,400),...randomize(60,5));
  ctx.rect(...randomize(145,410),...randomize(80,5));

  ctx.moveTo(185,380);
  ctx.lineTo(185,520);
  ctx.lineTo(165,538);
  ctx.moveTo(185,520);
  ctx.lineTo(205,538);

  ctx.strokeStyle = "blue"; 
  ctx.stroke();
};

const drawDrumset = () => {
  // ctx.clearRect(0,0,700,542);
  drawBassDrum();
  drawSnare();
  drawTom1();
  drawTom2();
  drawTom3();
  drawRide();
  drawCrash();
  drawHiHat();
};


const randomize = (x, y) => {
  return [
    Math.random() * (x - (x - 2)) + (x - 2),
    Math.random() * (y - (y - 2)) + (y - 2)
  ];
};

 const drawHitBassDrum = () => {
  // ctx.clearRect(309,391,349,500);
  // ctx.beginPath();
  // ctx.arc(350,400,(Math.random() * (50 - 20) + 20),0,2*Math.PI);
  // ctx.stroke();
 };
//

// setInterval(() => drawDrumset(), 400);

module.exports = {
  drawDrumset: drawDrumset
};
