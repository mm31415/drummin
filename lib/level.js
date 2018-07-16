import { reqAnimFrame, cancelAnimFrame } from "./main.js";


class LevelSelect {
  constructor () {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawLevels = this.drawLevels.bind(this);
    this.drawPlay = this.drawPlay.bind(this);
    this.drawEndMessage = this.drawEndMessage.bind(this)
  }

  drawLevels () {
    this.ctx.clearRect(530,302,700,542);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#FCFCFC";
    this.ctx.fillRect(530,302,700,542);
    this.ctx.closePath();

    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Levels:`, 540, 330);
    this.ctx.fillText(`'1' for Easy`, 560, 355);
    this.ctx.fillText(`'2' for Hard`, 560, 380);
    this.ctx.closePath();

    reqAnimFrame(this.drawLevels);
  }

  drawPlay () {
    this.ctx.clearRect(530,302,700,542);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#FCFCFC";
    this.ctx.fillRect(530,302,700,542);
    this.ctx.closePath();

    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Groove It!`, 580, 330);
    this.ctx.closePath();

    reqAnimFrame(this.drawPlay);
  }

  drawEndMessage (score, topScore, timestamp) {
    let message = "";
    if (score === topScore) {
      message = "Perfect!";
    } else if (score >= topScore * 0.8) {
      message = "Rock on!";
    } else if (score >= topScore * 0.6) {
      message = "Eh, ok.";
    } else {
      message = "Practice.";
    }

    this.ctx.clearRect(530,302,700,542);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#FCFCFC";
    this.ctx.fillRect(530,302,700,542);
    this.ctx.closePath();

    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Dang, ${score}?`, 540, 330);
    this.ctx.fillText(`${message}`, 560, 355);
    this.ctx.fillText(`Play Again?`, 540, 400);
    this.ctx.fillText(`'1' for Easy`, 560, 425);
    this.ctx.fillText(`'2' for Hard`, 560, 450);
    this.ctx.closePath();

    reqAnimFrame(() => this.drawEndMessage(score, topScore));
  }
}

export default LevelSelect;

//number of notes for song 1 === 133
//score: Bad = 0, Good 5, Awesome = 10
//if score === 1330 Perfect score
// if score >= 1100 You Rock
// if score >= 800 Just ok
// if score < 800 Need to hit the practice shed
