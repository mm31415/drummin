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
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);





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
    this.song = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, _songs_js__WEBPACK_IMPORTED_MODULE_1__["song"]);
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
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["cancelAnimFrame"])(this.drawRules);
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawGame);
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
    this.song = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, song);
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
    this.ctx.fillText(`Hit 'Space'`, 580, 330);
    this.ctx.fillText(`To`, 615, 355);
    this.ctx.fillText(`Play`, 608, 380);
    this.ctx.closePath();

    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawLevels);
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

    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(this.drawPlay);
  }

  drawEndMessage (score, timestamp) {
    let message = "";
    if (score === 1330) {
      message = "Perfect!";
    } else if (score >= 1100) {
      message = "Rock on!";
    } else if (score >= 800) {
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
    this.ctx.fillText(`Dang ${score}?`, 580, 330);
    this.ctx.fillText(`${message}`, 580, 355);
    this.ctx.fillText(`Hit 'Space'`, 580, 400);
    this.ctx.fillText(`To`, 615, 425);
    this.ctx.fillText(`Play Again`, 580, 450);
    this.ctx.closePath();

    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["reqAnimFrame"])(() => this.drawEndMessage(score));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LevelSelect);

//number of notes for song 1 === 133
//score: Bad = 0, Good 5, Awesome = 10
//if score === 1330 Perfect score
// if score >= 1100 You Rock
// if score >= 800 Just ok
// if score < 800 Need to hit the practice shed


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
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);







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
      gameboard.resetGame(lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()({}, _songs_js__WEBPACK_IMPORTED_MODULE_4__["song"]));
      scoreBoard.resetScore();
      track.play();
      bass.play();
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

  resetScore () {
    this.score = 0;
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


/***/ }),

/***/ "./node_modules/lodash.merge/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.merge/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=drumming.js.map