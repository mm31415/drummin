import DrumSet from "./drumset.js";
import DrawGame from "./game.js";
import ScoreBoard from "./score.js";
import LevelSelect from "./level.js";
import { song1, song2 } from "./songs.js";
import merge from "lodash.merge";

export const reqAnimFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

export const cancelAnimFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame;

document.addEventListener("DOMContentLoaded", () => {

  const drumset = new DrumSet();
  const gameboard = new DrawGame();
  const scoreBoard = new ScoreBoard();
  const levelSelect = new LevelSelect();

  reqAnimFrame(drumset.drawDrums);
  reqAnimFrame(gameboard.drawRules);
  reqAnimFrame(scoreBoard.drawScore);
  reqAnimFrame(levelSelect.drawLevels);

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

    const track = document.getElementById("track");
    const queue = gameboard.boardValues("queue");
    const currentBass = gameboard.boardValues("bass");
    const currentTom3 = gameboard.boardValues("tom3");
    const currentTom2 = gameboard.boardValues("tom2");
    const currentTom1 = gameboard.boardValues("tom1");
    const currentSnare = gameboard.boardValues("snare");
    const currentHiHat = gameboard.boardValues("hihat");
    const currentCrash = gameboard.boardValues("crash");
    const currentRide = gameboard.boardValues("ride");

    if (track.paused && (e.which === 49 || e.which === 50)) {
        e.preventDefault();
        let song;
        if(e.which === 49) {
          song = song1;
        } else if(e.which === 50) {
          song = song2;
        }
        gameboard.resetGame(merge({}, song.chart));
        scoreBoard.resetScore(song.topScore);
        track.play();
        cancelAnimFrame(levelSelect.drawLevels);
        reqAnimFrame(levelSelect.drawPlay);
        track.addEventListener("ended", (e) => {
          cancelAnimFrame(levelSelect.drawPlay);
          reqAnimFrame(() => levelSelect.drawEndMessage(scoreBoard.score));
        });
    } else if (e.which === 32) {
      e.preventDefault();
      bass.key = e.which;
      bass.play()
      if (currentBass > -1) {
        queue[currentBass].fill = "transparent";
        queue[currentBass].stroke = "transparent";
        queue[currentBass].textColor = "transparent";
        scoreBoard.updateScore(queue, currentBass);
        gameboard.resetBoardValue("bass");
      }
    } else if (e.which === 72) {
      hihat.key = e.which;
      hihat.play()
      if (currentHiHat > -1) {
        queue[currentHiHat].fill = "transparent";
        queue[currentHiHat].stroke = "transparent";
        queue[currentHiHat].textColor = "transparent";
        scoreBoard.updateScore(queue, currentHiHat);
        gameboard.resetBoardValue("hihat");
      }
    } else if (e.which === 70) {
      snare.key = e.which;
      snare.play()
      if (currentSnare > -1) {
        queue[currentSnare].fill = "transparent";
        queue[currentSnare].stroke = "transparent";
        queue[currentSnare].textColor = "transparent";
        scoreBoard.updateScore(queue, currentSnare);
        gameboard.resetBoardValue("snare");
      }
    } else if (e.which === 68) {
      tom1.key = e.which;
      tom1.play()
      if (currentTom1 > -1) {
        queue[currentTom1].fill = "transparent";
        queue[currentTom1].stroke = "transparent";
        queue[currentTom1].textColor = "transparent";
        scoreBoard.updateScore(queue, currentTom1);
        gameboard.resetBoardValue("tom1");
      }
    } else if (e.which === 83) {
      tom2.key = e.which;
      tom2.play()
      if (currentTom2 > -1) {
        queue[currentTom2].fill = "transparent";
        queue[currentTom2].stroke = "transparent";
        queue[currentTom2].textColor = "transparent";
        scoreBoard.updateScore(queue, currentTom2);
        gameboard.resetBoardValue("tom2");
      }
    } else if (e.which === 65) {
      tom3.key = e.which;
      tom3.play()
      if (currentTom3 > -1) {
        queue[currentTom3].fill = "transparent";
        queue[currentTom3].stroke = "transparent";
        queue[currentTom3].textColor = "transparent";
        scoreBoard.updateScore(queue, currentTom3);
        gameboard.resetBoardValue("tom3");
      }
    } else if (e.which === 74) {
      crash.key = e.which;
      crash.play()
      if (currentCrash > -1) {
        queue[currentCrash].fill = "transparent";
        queue[currentCrash].stroke = "transparent";
        queue[currentCrash].textColor = "transparent";
        scoreBoard.updateScore(queue, currentCrash);
        gameboard.resetBoardValue("crash");
      }
    } else if (e.which === 75) {
      ride.key = e.which;
      ride.play()
      if (currentRide > -1) {
        queue[currentRide].fill = "transparent";
        queue[currentRide].stroke = "transparent";
        queue[currentRide].textColor = "transparent";
        scoreBoard.updateScore(queue, currentRide);
        gameboard.resetBoardValue("ride");
      }
    }
  });

});






//space = 32 h = 72 f = 70 d = 68 s = 83 a = 65 j = 74 k = 75 1=49 2=50


// document.addEventListener("click", (e) => {
//   console.log(e.x);
//   console.log(e.y);
// });
//
// document.addEventListener("mousemove", (e) => {
//   debugger
//   console.log(e.x);
//   console.log(e.y);
// });
