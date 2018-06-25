/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/circles.js":
/*!************************!*\
  !*** ./lib/circles.js ***!
  \************************/
/*! exports provided: circleValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleValues", function() { return circleValues; });
const circleValues = (note) => {
  const radius = 14;
  const circleObj = { x: 0, y: 0, r: radius, fill: "lightgrey", stroke: "black", note: note };
  switch(note.split(" ")[0]) {
    case "Ride":
      circleObj.y = 37.5;
      break;
    case "Crash":
      circleObj.y = 37.5 + 35 * 1;
      break;
    case "HiHat":
      circleObj.y = 37.5 + 35 * 2;
      break;
    case "Snare":
      circleObj.y = 37.5 + 35 * 3;
      break;
    case "Tom1":
      circleObj.y = 37.5 + 35 * 4;
      break;
    case "Tom2":
      circleObj.y = 37.5 + 35 * 5;
      break;
    case "Tom3":
      circleObj.y = 37.5 + 35 * 6;
      break;
    case "Bass":
      circleObj.y = 37.5 + 35 * 7;
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
    case "Eighth1&":
      circleObj.x = -55 - 25;
      break;
    case "Eighth2&":
      circleObj.x = -55 - 25 * 3;
      break;
    case "Eighth3&":
      circleObj.x = -55 - 25 * 5;
      break;
    case "Eighth4&":
      circleObj.x = -55 - 25 * 7;
      break;

  }

  return circleObj;
};


/***/ }),

/***/ "./lib/drumset.js":
/*!************************!*\
  !*** ./lib/drumset.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./lib/main.js");


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
    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawDrums);
  };

  randomize (x, y) {
    return [
      Math.random() * (x - (x - 3)) + (x - 3),
      Math.random() * (y - (y - 3)) + (y - 3)
    ];
  };

}

/* harmony default export */ __webpack_exports__["default"] = (DrumSet);


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./lib/main.js");
/* harmony import */ var _songs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songs.js */ "./lib/songs.js");




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
    this.song = Object.assign({}, _songs_js__WEBPACK_IMPORTED_MODULE_1__["song"]);
    this.bar = 1;

    this.circlesQueue = [];
    this.circlesQueue = this.circlesQueue.concat(this.song[this.bar]);

    this.drawGame = this.drawGame.bind(this);
    this.drawRules = this.drawRules.bind(this);
    this.boardValues = this.boardValues.bind(this);
    this.resetBoardValue = this.resetBoardValue.bind(this);
    this.resetSong = this.resetSong.bind(this);

    this.track = document.getElementById("track");
    this.track.addEventListener("play", (e) => {
      this.dx = 2.5;
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["cancelAnimFrame"])(this.drawRules);
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawGame);
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

    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawGame);
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

  resetSong (song) {
    this.song = song;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GameBoard);


/***/ }),

/***/ "./lib/level.js":
/*!**********************!*\
  !*** ./lib/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./lib/main.js");


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
    this.ctx.fillText(`Hit 'Space'`, 580, 330);
    this.ctx.fillText(`To`, 615, 355);
    this.ctx.fillText(`Play`, 608, 380);

    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawLevels);
  }



}

/* harmony default export */ __webpack_exports__["default"] = (LevelSelect);


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! exports provided: reqAnimFrame, cancelAnimFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqAnimFrame", function() { return reqAnimFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimFrame", function() { return cancelAnimFrame; });
/* harmony import */ var _drumset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drumset.js */ "./lib/drumset.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.js */ "./lib/score.js");
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level.js */ "./lib/level.js");
/* harmony import */ var _songs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songs.js */ "./lib/songs.js");






const reqAnimFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

const cancelAnimFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame

const drumset = new _drumset_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const gameboard = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const scoreBoard = new _score_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
const levelSelect = new _level_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

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
  if (track.paused && e.which === 32) {
      e.preventDefault();
      gameboard.resetSong(Object.assign({}, _songs_js__WEBPACK_IMPORTED_MODULE_4__["song"]));
      track.play();
      bass.play();
  } else if (e.which === 32) {
    e.preventDefault();
    bass.key = e.which;
    bass.play()
    if (currentBass > -1) {
      queue[currentBass].fill = "transparent";
      queue[currentBass].stroke = "transparent";
      scoreBoard.updateScore(queue, currentBass);
      gameboard.resetBoardValue("bass");
    }
  } else if (e.which === 72) {
    hihat.key = e.which;
    hihat.play()
    if (currentHiHat > -1) {
      queue[currentHiHat].fill = "transparent";
      queue[currentHiHat].stroke = "transparent";
      scoreBoard.updateScore(queue, currentHiHat);
      gameboard.resetBoardValue("hihat");
    }
  } else if (e.which === 70) {
    snare.key = e.which;
    snare.play()
    if (currentSnare > -1) {
      queue[currentSnare].fill = "transparent";
      queue[currentSnare].stroke = "transparent";
      scoreBoard.updateScore(queue, currentSnare);
      gameboard.resetBoardValue("snare");
    }
  } else if (e.which === 68) {
    tom1.key = e.which;
    tom1.play()
    if (currentTom1 > -1) {
      queue[currentTom1].fill = "transparent";
      queue[currentTom1].stroke = "transparent";
      scoreBoard.updateScore(queue, currentTom1);
      gameboard.resetBoardValue("tom1");
    }
  } else if (e.which === 83) {
    tom2.key = e.which;
    tom2.play()
    if (currentTom2 > -1) {
      queue[currentTom2].fill = "transparent";
      queue[currentTom2].stroke = "transparent";
      scoreBoard.updateScore(queue, currentTom2);
      gameboard.resetBoardValue("tom2");
    }
  } else if (e.which === 65) {
    tom3.key = e.which;
    tom3.play()
    if (currentTom3 > -1) {
      queue[currentTom3].fill = "transparent";
      queue[currentTom3].stroke = "transparent";
      scoreBoard.updateScore(queue, currentTom3);
      gameboard.resetBoardValue("tom3");
    }
  } else if (e.which === 74) {
    crash.key = e.which;
    crash.play()
    if (currentCrash > -1) {
      queue[currentCrash].fill = "transparent";
      queue[currentCrash].stroke = "transparent";
      scoreBoard.updateScore(queue, currentCrash);
      gameboard.resetBoardValue("crash");
    }
  } else if (e.which === 75) {
    ride.key = e.which;
    ride.play()
    if (currentRide > -1) {
      queue[currentRide].fill = "transparent";
      queue[currentRide].stroke = "transparent";
      scoreBoard.updateScore(queue, currentRide);
      gameboard.resetBoardValue("ride");
    }
  }
});






//space = 32 h = 72 f = 70 d = 68 s = 83 a = 65 j = 74 k = 75


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


/***/ }),

/***/ "./lib/score.js":
/*!**********************!*\
  !*** ./lib/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./lib/main.js");



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
    } else if (Math.abs(545 - queue[instrument].x) <= 7.5) {
      this.score += 5;
    } else if (Math.abs(545 - queue[instrument].x) <= 15) {
      this.score += 2;
    } else if (Math.abs(545 - queue[instrument].x) <= 30) {
      this.score += 1;
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

    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawScore);
  }



}

/* harmony default export */ __webpack_exports__["default"] = (ScoreBoard);

//number of notes for song 1 === 133
//score: Bad = 0, Good 5, Awesome = 10
//if score === 1330 Perfect score
// if score >= 1100 You Rock
// if score >= 800 Just ok
// if score < 800 Need to hit the practice shed


/***/ }),

/***/ "./lib/songs.js":
/*!**********************!*\
  !*** ./lib/songs.js ***!
  \**********************/
/*! exports provided: song */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "song", function() { return song; });
/* harmony import */ var _circles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circles.js */ "./lib/circles.js");


const song = {
  1: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom1 Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom2 Eighth3&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Eighth4&")
  ],
  2: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Crash Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  3: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  4: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  5: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom1 Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom2 Eighth3&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Eighth4&")
  ],
  6: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Crash Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth2&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth4&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  7: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Crash Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth2&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth4&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  8: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Crash Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth2&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Eighth4&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  9: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom1 Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom2 Eighth3&"),
      Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Eighth4&")
  ],
  10: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Crash Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth2&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth4&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  11: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth2&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth4&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  12: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth2&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter4"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Ride Eighth4&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter4")
  ],
  13: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("HiHat Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Crash Quarter4"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Snare Eighth1&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom1 Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom1 Eighth2&"),
       Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom2 Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Tom3 Eighth3&"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_0__["circleValues"])("Bass Quarter4")
  ],
};


/***/ })

/******/ });
//# sourceMappingURL=drumming.js.map