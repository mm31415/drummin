import DrumSet from "./drumset.js";
import DrawGame from "./game.js";

export const reqAnimFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame

export const cancelAnimFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame

const drumset = new DrumSet();
const gameboard = new DrawGame();

reqAnimFrame(drumset.drawDrums);
reqAnimFrame(gameboard.drawRules);

const audioElements = document.querySelectorAll('audio');

const addListener = (element) => {
  element.addEventListener("playing", () => {
    document.addEventListener("keydown", (e) => {
      if (e.which === element.key) {
        element.currentTime = 0.0;
      }
    });
  });
};

audioElements.forEach((element) => addListener(element));

document.addEventListener("keydown", (e) => {
  const queue = gameboard.boardValues("queue");
  if (e.which === 32) {
    e.preventDefault();
    bass.key = e.which;
    bass.play()
    queue[gameboard.boardValues("bass")].fill = "transparent";
    queue[gameboard.boardValues("bass")].stroke = "transparent";
    gameboard.resetBoardValue("bass");
  } else if (e.which === 72) {
    hihat.key = e.which;
    hihat.play()
  } else if (e.which === 70) {
    snare.key = e.which;
    snare.play()
  } else if (e.which === 68) {
    tom1.key = e.which;
    tom1.play()
  } else if (e.which === 83) {
    tom2.key = e.which;
    tom2.play()
  } else if (e.which === 65) {
    tom3.key = e.which;
    tom3.play()
  } else if (e.which === 74) {
    crash.key = e.which;
    crash.play()
  } else if (e.which === 75) {
    ride.key = e.which;
    ride.play()
  }
});





//space = 32 h = 72 f = 70 d = 68 s = 83 a = 65 j = 74 k = 75
