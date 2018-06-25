import { reqAnimFrame } from "./main.js";


class ScoreBoard {
  constructor () {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.score = 0;
    this.drawScore = this.drawScore.bind(this);
  }

  updateScore (queue, instrument) {
    if (Math.abs(545 - queue[instrument].x) <= 2.5) {
      this.score += 10;
    } else if (Math.abs(545 - queue[instrument].x) <= 5) {
      this.score += 5;
    } else if (Math.abs(545 - queue[instrument].x) <= 10) {
      this.score += 2;
    } else {
      this.score += 0;
    }
  }

  drawScore () {
    this.ctx.clearRect(0,302,135,542);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#FCFCFC";
    this.ctx.fillRect(0,302,135,542);
    this.ctx.closePath();

    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "blue";
    this.ctx.fillText(`Score: ${this.score}`, 10, 330);

    reqAnimFrame(this.drawScore);
  }



}

export default ScoreBoard;

//number of notes for song 1 === 133
//score: Bad = 0, Good 5, Awesome = 10
//if score === 1330 Perfect score
// if score >= 1100 You Rock
// if score >= 800 Just ok
// if score < 800 Need to hit the practice shed
