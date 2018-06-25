import { reqAnimFrame } from "./main.js";

class LevelSelect {
  constructor () {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawLevels = this.drawLevels.bind(this);

  }

  drawLevels () {
    this.ctx.clearRect(530,302,700,542);

    this.ctx.beginPath();
    this.ctx.fillStyle = "#FCFCFC";
    this.ctx.fillRect(530,302,700,542);
    this.ctx.closePath();

    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Play`, 580, 330);

    reqAnimFrame(this.drawLevels);
  }

}

export default LevelSelect;
