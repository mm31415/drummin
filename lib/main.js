const DrawKit = require("./drumset.js");
const DrawGame = require("./game.js");

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
  const queue = DrawGame.boardValues("queue");
  if (e.which === 32) {
    e.preventDefault();
    queue[DrawGame.boardValues("bass")].fill = "transparent";
    queue[DrawGame.boardValues("bass")].stroke = "transparent";
    DrawGame.resetBoardValue("bass");
    bass.key = e.which;
    bass.play()
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
