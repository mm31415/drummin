const reqAnimFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame

const cancelAnimFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

let dx = 2.5;
let prevTime = 0.0;

const drawGame = (timestamp) => {

  if (timestamp - prevTime >= (1000/30)) {
    drawRules("stop");
    ctx.clearRect(0,0,700,301);
    drawBoard();
    drawCircles();
    drawKeyMap();
    prevTime = timestamp;
  }

  // drawText();

  // ctx.clearRect(0,0,700,301);
  // drawBoard();
  // drawCircles();
  // drawText();
  reqAnimFrame(drawGame);
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


const circleValues = (note) => {
  const radius = 14;
  const circleObj = { x: 0, y: 0, r: radius };
  switch(note.split(" ")[0]) {
    case "Snare":
      circleObj.y = 37.5 + 35 * 3;
      break;
    case "Bass":
      circleObj.y = 37.5 + 35 * 4;
      break;
  }

  switch(note.split(" ")[1]) {
    case "Quarter1":
      circleObj.x = -55;
      break;
    case "Quarter2":
      circleObj.x = -55 - 50;
      break;
    case "Quarter3":
      circleObj.x = -55 - 50 * 2;
      break;
    case "Quarter4":
      circleObj.x = -55 - 50 * 3;
      break;
  }

  return circleObj;
};

const song1 = {
  1: [circleValues("Snare Quarter1"), circleValues("Bass Quarter2"), circleValues("Snare Quarter3"), circleValues("Snare Quarter4")],
  2: [circleValues("Bass Quarter1"), circleValues("Bass Quarter2"), circleValues("Bass Quarter3"), circleValues("Snare Quarter4")]
};
let bar = 1;

// const circle = -55;

let circlesQueue = [];
circlesQueue = circlesQueue.concat(song1[bar]);

const drawCircles = () => {
  for(let i = 0; i < circlesQueue.length; i++) {
    let circle = circlesQueue[i];
    ctx.beginPath();
    ctx.arc(...Object.values(circle), 0, Math.PI * 2);
    ctx.fillStyle = "lightgrey";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    circle.x += dx;
    if (circlesQueue[i].x >= 545) {
      circlesQueue.shift();
    }
    if (circlesQueue.length !== 0) {
      if (circlesQueue[circlesQueue.length - 1].x >= -2.5) {
        bar += 1;
        if (song1[bar]) {
          circlesQueue = circlesQueue.concat(song1[bar]);
        }
      }
    }
  }
};





const drawText = () => {
  if(circles[currentCrashIdx] > 547 - 3 && circles[currentCrashIdx] < 547 + 3) {
    ctx.font="20px Georgia";
    ctx.fillText("Hello World!",10,50);
  }
};

const drawRules = (action) => {
    ctx.clearRect(0,0,700,301);
    drawBoard();
    drawKeyMap();
};

const drawKeyMap = () => {
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("'K'", 10, (45 + 35  * 0));
  ctx.fillText("'J'", 10, (45 + 35 * 1));
  ctx.fillText("'H'", 10, (45 + 35 * 2));
  ctx.fillText("'F'", 10, (45 + 35 * 3));
  ctx.fillText("'D'", 10, (45 + 35 * 4));
  ctx.fillText("'S'", 10, (45 + 35 * 5));
  ctx.fillText("'A'", 10, (45 + 35 * 6));
  ctx.fillText("Spacebar", 10, (45 + 35 * 7));
}

track = document.getElementById("track");
track.addEventListener("play", (e) => {
  dx = 2.5;
  cancelAnimFrame(drawRules);
  reqAnimFrame(drawGame);
});

track.addEventListener("pause", (e) => {
  dx = 0;
});

reqAnimFrame(drawRules);
