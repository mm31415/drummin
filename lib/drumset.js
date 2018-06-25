import { reqAnimFrame } from "./main.js";

class DrumSet {

  constructor (props) {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.prevTime = 0.0;
    this.drawDrums = this.drawDrumset.bind(this);
  }

  drawBassDrum () {
    const coords = [
      [350,450], [390,470], [380,455], [390,500],
      [390,480], [380,530], [390,520], [350,540],
      [365,540], [320,530], [330,540], [310,490],
      [310,510], [310,510], [320,460], [310,480]
    ];

    this.ctx.beginPath();
    this.ctx.moveTo(...this.randomize(350,450));
    for(let i = 0; i < coords.length; i++) {
      this.ctx.lineTo(...this.randomize(...coords[i]));
    }
    this.ctx.closePath();

    this.ctx.moveTo(385,500);
    this.ctx.lineTo(400,538);

    this.ctx.moveTo(314,503);
    this.ctx.lineTo(299,538);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawTom1 () {
    this.ctx.beginPath();
    this.ctx.arc(300,390,28,0,Math.PI*2);
    this.ctx.closePath();

    this.ctx.moveTo(330,464);
    this.ctx.lineTo(330,430);
    this.ctx.lineTo(315,415);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawTom2 () {
    this.ctx.beginPath();
    this.ctx.arc(400,390,35,0,Math.PI*2);
    this.ctx.closePath();

    this.ctx.moveTo(360,455);
    this.ctx.lineTo(360,430);
    this.ctx.lineTo(375,415);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawTom3 () {
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

    this.ctx.beginPath();
    this.ctx.moveTo(400,435);
    this.ctx.lineTo(500,435);
    for(let i = 0; i < rightSide.length; i++) {
      this.ctx.lineTo(...this.randomize(...rightSide[i]));
    }
    this.ctx.lineTo(505,505);
    this.ctx.lineTo(395,505);
    for(let i = 0; i < leftSide.length; i++) {
      this.ctx.lineTo(...this.randomize(...leftSide[i]));
    }
    this.ctx.lineTo(400,435);
    this.ctx.closePath();

    this.ctx.moveTo(410, 505);
    this.ctx.lineTo(410, 538);

    this.ctx.moveTo(490, 505);
    this.ctx.lineTo(490, 538);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawSnare () {
    const rightSide = [
      [295,440], [305,445], [295,450], [305,455],
      [295,460], [305,465], [295,470], [305,475]
    ];

    const leftSide = [
      [195,475], [205,470], [195,465], [205,460],
      [195,455], [205,450], [195,445], [205,440]
    ];

    this.ctx.beginPath();
    this.ctx.moveTo(200,435);
    this.ctx.lineTo(300,435);
    for(let i = 0; i < rightSide.length; i++) {
      this.ctx.lineTo(...this.randomize(...rightSide[i]));
    }
    this.ctx.lineTo(305,475);
    this.ctx.lineTo(195,475);
    for(let i = 0; i < leftSide.length; i++) {
      this.ctx.lineTo(...this.randomize(...leftSide[i]));
    }
    this.ctx.lineTo(200,435);
    this.ctx.closePath();

    this.ctx.moveTo(250,475);
    this.ctx.lineTo(250,520);
    this.ctx.lineTo(220,538);
    this.ctx.moveTo(250,520);
    this.ctx.lineTo(280,538);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawRide () {
    const coords = [
      [410,320],[417,320],[417,340],[424,340],[424,325],[431,325],[431,345],
      [438,345],[438,330],[445,330],[445,350],[452,350],[452,335],[459,335],
      [459,355],[466,355],[466,340],[473,340],[473,360],[480,360],[480,345],
      [487,345],[487,365],[494,365],[494,350],[501,350],[501,370],[508,370],
      [508,355],[515,355],[515,375],[523,375],[523,365]
    ];

    this.ctx.beginPath();
    this.ctx.moveTo(410,330);
    for(let i = 0; i < coords.length; i++) {
      this.ctx.lineTo(...this.randomize(...coords[i]));
    }

    this.ctx.moveTo(469,345);
    this.ctx.lineTo(469,520);
    this.ctx.lineTo(429,538);
    this.ctx.moveTo(469,520);
    this.ctx.lineTo(509,538);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawCrash () {
    const coords = [
      [210,320],[217,320],[217,340],[224,340],[224,325],[231,325],[231,345],
      [238,345],[238,330],[245,330],[245,350],[252,350],[252,335],[259,335],
      [259,355],[266,355],[266,340],[273,340],[273,360],[280,360],[280,345],
      [287,345],[287,365],[294,365],[294,350],[301,350],[301,370],[308,370],
      [308,355],[315,355],[315,375],[323,375]
    ];

    this.ctx.beginPath();
    this.ctx.moveTo(210,365);
    let j = coords.length - 1;
    for(let i = 0; i < coords.length; i++) {
      this.ctx.lineTo(...this.randomize(coords[i][0],coords[j][1]));
      j--;
    }
    this.ctx.lineTo(...this.randomize(323,330));

    this.ctx.moveTo(267,353);
    this.ctx.lineTo(267,510);
    this.ctx.lineTo(237,538);
    this.ctx.moveTo(267,510);
    this.ctx.lineTo(297,538);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawHiHat () {
    this.ctx.beginPath();
    this.ctx.rect(...this.randomize(155,400),...this.randomize(60,5));
    this.ctx.rect(...this.randomize(145,410),...this.randomize(80,5));

    this.ctx.moveTo(185,380);
    this.ctx.lineTo(185,520);
    this.ctx.lineTo(165,538);
    this.ctx.moveTo(185,520);
    this.ctx.lineTo(205,538);

    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  };

  drawDrumset (timestamp) {
    if (this.prevTime === 0.0 || timestamp - this.prevTime >= 400) {
      this.ctx.clearRect(135,302,530,542);
      this.ctx.beginPath();
      this.ctx.fillStyle = "#FCFCFC";
      this.ctx.fillRect(135,302,530,542);
      this.ctx.closePath();

      this.drawBassDrum();
      this.drawSnare();
      this.drawTom1();
      this.drawTom2();
      this.drawTom3();
      this.drawRide();
      this.drawCrash();
      this.drawHiHat();
      this.prevTime = timestamp;
    }
    reqAnimFrame(this.drawDrums);
  };

  randomize (x, y) {
    return [
      Math.random() * (x - (x - 3)) + (x - 3),
      Math.random() * (y - (y - 3)) + (y - 3)
    ];
  };

}

export default DrumSet;
