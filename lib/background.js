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

const radius = 14;
//
// const randomNeg = () => {
//   const i = Math.floor(Math.random() * 9 + 1);
//   return i * i * -1 - radius;
// }
//
// const createCircleObj = () => {
//   const circle = { };
//   circle.x = randomNeg();
//   circle.y = (37.5 + (35 * Math.floor(Math.random() * 7 + 1)));
//   return circle;
// };
//
// // let currentCrashIdx = undefined;
// let circlesQueue = [];
// circlesQueue.push(createCircleObj());

const circle = -55;

const circlesQueue = [];
circlesQueue.push(circle);

const drawCircles = () => {
  for(let i = 0; i < circlesQueue.length; i++) {
    // if (circlesQueue[i].x === (500) && (i % 2 === 0)) {
    //   circlesQueue.push(createCircleObj());
    //   // if (circlesQueue.length > 5) {
    //   //   dx += 1;
    //   // }
    // }

    ctx.beginPath();
    ctx.arc(circlesQueue[i],37.5,radius,0,Math.PI*2);
    if(i % 2 === 0) {
      ctx.strokeStyle = "green";
    } else {
      ctx.strokeStyle = "blue";
    }
    ctx.stroke();
    ctx.closePath();
    circlesQueue[i] += dx;
    if (circlesQueue[i] >= 545) {
      circlesQueue.shift();
      // if (i % 7 === 0) {
      //   circlesQueue.push(createCircleObj());
      // }
    }
    if (circlesQueue[circlesQueue.length - 1] >= -2.5) {
      circlesQueue.push(circle);
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
  // setInterval(drawGame, 25);
  cancelAnimFrame(drawRules);
  reqAnimFrame(drawGame);
});

track.addEventListener("pause", (e) => {
  dx = 0;
});

reqAnimFrame(drawRules);






// setInterval(drawGame, 0);



// ctx.beginPath();
// ctx.arc(547,37.5,14,0,Math.PI*2);
// ctx.stroke();
// ctx.closePath();
