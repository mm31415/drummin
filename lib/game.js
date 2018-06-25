import { reqAnimFrame, cancelAnimFrame } from "./main.js";
import { song } from "./songs.js";
import merge from "lodash.merge";


class GameBoard {
  constructor () {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.dx = 2.5;
    this.prevTime = 0;
    this.currentBass = -1;
    this.currentTom3 = -1;
    this.currentTom2 = -1;
    this.currentTom1 = -1;
    this.currentSnare = -1;
    this.currentHiHat = -1;
    this.currentCrash = -1;
    this.currentRide = -1;
    this.song = merge({}, song);
    this.bar = 1;

    this.circlesQueue = [];
    this.circlesQueue = this.circlesQueue.concat(this.song[this.bar]);

    this.drawGame = this.drawGame.bind(this);
    this.drawRules = this.drawRules.bind(this);
    this.boardValues = this.boardValues.bind(this);
    this.resetBoardValue = this.resetBoardValue.bind(this);
    this.resetGame = this.resetGame.bind(this);

    this.track = document.getElementById("track");
    this.track.addEventListener("play", (e) => {
      this.dx = 2.5;
      cancelAnimFrame(this.drawRules);
      reqAnimFrame(this.drawGame);
    });

    this.track.addEventListener("pause", (e) => {
      this.dx = 0;
    });
  }


  drawGame(timestamp) {
    if (timestamp - this.prevTime >= (1000/30)) {
      this.ctx.clearRect(0,0,700,301);
      this.drawBoard();
      this.drawCircles();
      this.drawKeyMap();
      this.prevTime = timestamp;
    }

    reqAnimFrame(this.drawGame);
  }

  drawBoard() {

    this.ctx.beginPath();
    this.ctx.fillStyle = "#FCFCFC";
    this.ctx.fillRect(0,0,700,301);
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(0,300);
    this.ctx.lineTo(700,300);
    this.ctx.moveTo(0,20);
    this.ctx.lineTo(700,20);

    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
    this.ctx.closePath();

    let y = 35;
    this.ctx.beginPath();
    for(let i = 1; i < 8; i++) {
      this.ctx.moveTo(0,20+y*i);
      this.ctx.lineTo(700,20+y*i);
    }

    this.ctx.moveTo(530,20);
    this.ctx.lineTo(530,300);
    this.ctx.moveTo(560,20);
    this.ctx.lineTo(560,301);
    this.ctx.strokeStyle = "gray";
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.setLineDash([5, 11]);
    this.ctx.moveTo(450,20);
    this.ctx.lineTo(450,300);
    this.ctx.moveTo(600,20);
    this.ctx.lineTo(600,300);
    this.ctx.strokeStyle = "gray";
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.closePath();

  }

  drawCircles() {
    for(let i = 0; i < this.circlesQueue.length; i++) {
      let circle = this.circlesQueue[i];
      this.setCurrentInstrument(i);
      this.ctx.beginPath();
      this.ctx.arc(circle.x,circle.y,circle.r,0,Math.PI * 2);
      this.ctx.fillStyle = circle.fill;
      this.ctx.strokeStyle = circle.stroke;
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
      circle.x += this.dx;
      if (this.circlesQueue[i].x > 614) {
        this.resetBoardValue(this.circlesQueue[i].y);
      }
      if (this.circlesQueue.length !== 0) {
        let checkX = -2.5;
        const note = this.circlesQueue[this.circlesQueue.length - 1].note
        if (note[note.length - 1] === "&") {
          checkX -= 25;
        }

        if (this.circlesQueue[this.circlesQueue.length - 1].x >= checkX) {
          this.bar += 1;
          if (this.song[this.bar]) {
            this.circlesQueue = this.circlesQueue.concat(this.song[this.bar]);
          }
        }
      }
    }
  }

  setCurrentInstrument(idx) {
    if (this.circlesQueue[idx].fill !== "transparent" && this.circlesQueue[idx].x >= 464 && this.circlesQueue[idx].x <= 614) {
      if (this.circlesQueue[idx].y === 37.5 + 35 * 7) {
        this.currentBass = (this.currentBass > -1) ? this.currentBass : idx;
      } else if (this.circlesQueue[idx].y === 37.5 + 35 * 6) {
        this.currentTom3 = (this.currentTom3 > -1) ? this.currentTom3 : idx;
      } else if (this.circlesQueue[idx].y === 37.5 + 35 * 5) {
        this.currentTom2 = (this.currentTom2 > -1) ? this.currentTom2 : idx;
      } else if (this.circlesQueue[idx].y === 37.5 + 35 * 4) {
        this.currentTom1 = (this.currentTom1 > -1) ? this.currentTom1 : idx;
      } else if (this.circlesQueue[idx].y === 37.5 + 35 * 3) {
        this.currentSnare = (this.currentSnare > -1) ? this.currentSnare : idx;
      } else if (this.circlesQueue[idx].y === 37.5 + 35 * 2) {
        this.currentHiHat = (this.currentHiHat > -1) ? this.currentHiHat : idx;
      } else if (this.circlesQueue[idx].y === 37.5 + 35 * 1) {
        this.currentCrash = (this.currentCrash > -1) ? this.currentCrash : idx;
      } else if (this.circlesQueue[idx].y === 37.5) {
        this.currentRide = (this.currentRide > -1) ? this.currentRide : idx;
      }
    }
  }

  // drawText() {
  //   if(circles[currentCrashIdx] > 547 - 3 && circles[currentCrashIdx] < 547 + 3) {
  //     this.ctx.font="20px Georgia";
  //     this.ctx.fillText("Hello World!",10,50);
  //   }
  // };

  drawRules() {
      this.ctx.clearRect(0,0,700,301);
      this.drawBoard();
      this.drawKeyMap();
  }

  drawKeyMap() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("'K'", 10, (45 + 35  * 0));
    this.ctx.fillText("'J'", 10, (45 + 35 * 1));
    this.ctx.fillText("'H'", 10, (45 + 35 * 2));
    this.ctx.fillText("'F'", 10, (45 + 35 * 3));
    this.ctx.fillText("'D'", 10, (45 + 35 * 4));
    this.ctx.fillText("'S'", 10, (45 + 35 * 5));
    this.ctx.fillText("'A'", 10, (45 + 35 * 6));
    this.ctx.fillText("Spacebar", 10, (45 + 35 * 7));
  }

  boardValues(type) {
    switch(type) {
      case "queue":
        return this.circlesQueue;
      case "bass":
        return this.currentBass;
      case "tom3":
        return this.currentTom3;
      case "tom2":
        return this.currentTom2;
      case "tom1":
        return this.currentTom1;
      case "snare":
        return this.currentSnare;
      case "hihat":
        return this.currentHiHat;
      case "crash":
        return this.currentCrash;
      case "ride":
        return this.currentRide;
    }
  }

  resetBoardValue(type) {
    switch(type) {
      case "bass":
      case 37.5 + 35 * 7:
        this.currentBass = -1;
        break;
      case "tom3":
      case 37.5 + 35 * 6:
        this.currentTom3 = -1;
        break;
      case "tom2":
      case 37.5 + 35 * 5:
        this.currentTom2 = -1;
        break;
      case "tom1":
      case 37.5 + 35 * 4:
        this.currentTom1 = -1;
        break;
      case "snare":
      case 37.5 + 35 * 3:
        this.currentSnare = -1;
        break;
      case "hihat":
      case 37.5 + 35 * 2:
        this.currentHiHat = -1;
        break;
      case "crash":
      case 37.5 + 35 * 1:
        this.currentCrash = -1;
        break;
      case "ride":
      case 37.5:
        this.currentRide = -1;
        break;
    }
  }

  resetGame (song) {
    this.song = merge({}, song);
    this.bar = 1;
    this.circlesQueue = [];
    this.circlesQueue = this.circlesQueue.concat(this.song[this.bar]);
    this.score = 0;
    this.currentBass = -1;
    this.currentTom3 = -1;
    this.currentTom2 = -1;
    this.currentTom1 = -1;
    this.currentSnare = -1;
    this.currentHiHat = -1;
    this.currentCrash = -1;
    this.currentRide = -1;
  }

}

export default GameBoard;
