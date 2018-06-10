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
  const circleObj = { x: 0, y: 0, r: radius, fill: "lightgrey", stroke: "black" };
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
      this.ctx.clearRect(0,302,700,542);
      this.ctx.beginPath();
      this.ctx.fillStyle = "#FCFCFC";
      this.ctx.fillRect(0,302,700,542);
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
      Math.random() * (x - (x - 2)) + (x - 2),
      Math.random() * (y - (y - 2)) + (y - 2)
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
/* harmony import */ var _circles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circles.js */ "./lib/circles.js");




class GameBoard {
  constructor () {
    this.canvas = document.getElementById("my-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start = -55;
    this.end = 545;
    this.distance = this.start - this.end;
    this.bpm = 120;
    this.beatsPerMeasure = 4;
    this.measure = 4;
    this.dx = 2.5;
    this.prevTime = 0.0;
    this.currentBass = -1;
    this.song1 = {
      1: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Snare Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Bass Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Snare Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Snare Quarter4")],
      2: [Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Bass Quarter1"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Bass Quarter2"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Bass Quarter3"), Object(_circles_js__WEBPACK_IMPORTED_MODULE_1__["circleValues"])("Snare Quarter4")]
    };
    this.bar = 1;

    this.circlesQueue = [];
    this.circlesQueue = this.circlesQueue.concat(this.song1[this.bar]);



    this.drawGame = this.drawGame.bind(this);
    this.drawRules = this.drawRules.bind(this);
    this.boardValues = this.boardValues.bind(this);
    this.resetBoardValue = this.resetBoardValue.bind(this);

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
  };

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
    this.ctx.lineTo(560,300);
    this.ctx.strokeStyle = "gray";
    this.ctx.stroke();
    this.ctx.closePath();

  };

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
      if (this.circlesQueue[i].x >= 545) {
        this.circlesQueue[i].fill = "transparent";
        this.circlesQueue[i].stroke = "transparent";
      }
      if (this.circlesQueue.length !== 0) {
        if (this.circlesQueue[this.circlesQueue.length - 1].x >= -2.5) {
          this.bar += 1;
          if (this.song1[this.bar]) {
            this.circlesQueue = this.circlesQueue.concat(this.song1[this.bar]);
          }
        }
      }
    }
  };

  setCurrentInstrument(idx) {
    if (this.circlesQueue[idx].y === 37.5 + 35 * 7 && this.circlesQueue[idx].fill !== "transparent") {
      this.currentBass = (this.currentBass > -1) ? this.currentBass : idx;
    }
  };

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
  };

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
    }
  }

  resetBoardValue(type) {
    switch(type) {
      case "bass":
        this.currentBass = -1;
        break;
    }
  }


}

/* harmony default export */ __webpack_exports__["default"] = (GameBoard);


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



const reqAnimFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame

const cancelAnimFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame

const drumset = new _drumset_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const gameboard = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

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


/***/ })

/******/ });
//# sourceMappingURL=drumming.js.map